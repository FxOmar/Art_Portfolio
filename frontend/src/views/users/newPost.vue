<template>
  <div class="">
    <div class="header flex justify-between my-8 mx-8 text-sm">
      <router-link to="/senku/posts" class="text-padua-200 hover:text-padua-500"><i class="fas fa-chevron-left mr-2"></i> Posts</router-link>
      <div class="">
        <button class="focus:outline-none text-padua-200 hover:text-padua-500">Publish</button>
        <button @click="isSideBarActive = !isSideBarActive" class="focus:outline-none text-padua-200 hover:text-padua-500 ml-3"><i class="fas fa-cog"></i></button>
        <transition name="slide-fade">
          <div v-on-clickaway="away" v-if="isSideBarActive" class="bg-padua-300 fixed top-0 right-0 h-full py-12 shadow slide-menu z-10" style="width: 366px;">
            <div class="mx-6 -mt-8 mb-6 text-moss text-lg flex justify-between">
              <h1 class="text-white font-bold antialiased">Post settings</h1>
              <a @click="isSideBarActive = false" href="#"><i class="fas fa-times"></i></a>
            </div>
            <div class="flex flex-col mx-5">
              <div class="bg-padua-100 py-10 text-center">
                <input type="file" @click="displayImgName" name="file" id="file" ref="inputFile" class="inputfile"/>
                <label ref="label"  for="file">Choose a file</label>
              </div>
              <div class="my-6">
                <h3 class="text-white font-bold mb-2">Tags</h3>
                <vue-tags-input
                  v-model="tag"
                  :tags="tags"
                  @tags-changed="newTags => tags = newTags"
                />
              </div>
              <div class="my-6">
                <h3 class="text-white font-bold mb-2">Authors</h3>
                <vue-tags-input
                  v-model="author"
                  :tags="authors"
                  @tags-changed=" newAuthors => authors = newAuthors"
                />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="editor container mx-auto my-20 w-4/5">
      <input class="w-full border-none text-4xl text-gray-800 font-bold antialiased focus:outline-none bg-transparent my-3" placeholder="Post Title" type="text" name="" id="">
      <editor-menu-bubble :editor="editor" v-slot="{ commands, isActive, menu }">
        <div
          class="menububble"
          :class="{ 'is-active': menu.isActive }"
          :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
        >
          <button
            class="menububble__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <i class="fas fa-code"></i>
          </button>

          <button
            class="menububble__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <i class="fas fa-code"></i>
          </button>

          <button
            class="menububble__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <i class="fas fa-code"></i>
          </button>
          <button
            class="menububble__button"
            @click="showImagePrompt(commands.image)"
          >
            <i class="far fa-image"></i>
          </button>

        </div>
      </editor-menu-bubble>
      <!-- <input type="text" v-model="editor.extensions.options.placeholder.emptyNodeText"> -->
      <editor-content class="editor__content"  :editor="editor" />
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
import {
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Placeholder,
  Image
} from 'tiptap-extensions'
import { directive as onClickaway } from 'vue-clickaway'
import VueTagsInput from '@johmun/vue-tags-input'
export default {
  components: {
    EditorContent,
    EditorMenuBubble,
    VueTagsInput
  },
  directives: {
    onClickaway: onClickaway
  },
  data () {
    return {
      tag: '',
      tags: [],
      authors: ['Omar chadidi'],
      author: '',
      isSideBarActive: false,
      keepInBounds: true,
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Placeholder({
            emptyEditorClass: 'is-editor-empty',
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Begin writing your post...',
            showOnlyWhenEditable: true,
            showOnlyCurrent: true
          }),
          new Image()
        ]
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    showImagePrompt (command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
    away: function () {
      this.isSideBarActive = false
    },
    displayImgName () {
      const inputs = this.$refs.inputFile
      const label = this.$refs.label

      inputs.addEventListener('change', function (e) {
        const fileName = e.target.value.split('\\').pop()
        label.innerHTML = fileName
      })
    }
  }
}
</script>

<style>
.editor {
    @apply relative
}
.menububble {
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    z-index: 20;
    background: #000;
    border-radius: 5px;
    padding: .3rem;
    margin-bottom: .5rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: opacity .2s,visibility .2s;
    transition: opacity .2s,visibility .2s;
}
.menububble.is-active {
  opacity: 1;
  visibility: visible;
}
.menububble__button {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    background: transparent;
    border: 0;
    color: #fff;
    padding: .2rem .5rem;
    margin-right: .2rem;
    border-radius: 3px;
    cursor: pointer;
}
:focus {
  @apply outline-none
}
.editor__content p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #a0aec0;
  pointer-events: none;
  height: 0;
  font-style: italic;
}
.editor__content div p {
  @apply text-lg;
  color: theme('colors.gray.800');
}
.slide-menu ul li {
  @apply pt-3 text-moss antialiased text-lg font-medium
}
.slide-menu ul li:hover{
  @apply text-white
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */{
  transform: translateX(10px);
  opacity: 0;
}
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    display: inline-block;
}
.inputfile + label {
  cursor: pointer; /* "hand" cursor */
}
/* style the background and the text color of the input ... */
.vue-tags-input {
  @apply rounded
}

.vue-tags-input .ti-new-tag-input {
  background: transparent;
  color: #222222;
}

.vue-tags-input .ti-input {
  padding: 5px 10px;
  transition: border-bottom 200ms ease;
  border: none;
}
/* default styles for all the tags */
.vue-tags-input .ti-tag {
  position: relative;
  background: theme('colors.padua.500');
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
}

</style>
