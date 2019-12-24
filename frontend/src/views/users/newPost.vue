<template>
  <div class="">
    <div class="header flex justify-between my-8 mx-8 text-sm">
      <router-link to="/dashboard/posts" class=" text-padua-200"><i class="fas fa-chevron-left mr-2"></i> Posts</router-link>
      <div class=" text-padua-200">
        <button>Publish</button>
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

        </div>
      </editor-menu-bubble>
      <!-- <input type="text" v-model="editor.extensions.options.placeholder.emptyNodeText"> -->
      <editor-content class="editor__content"  :editor="editor" />
    </div>
  </div>
</template>

<script>
// import Icon from 'Components/Icon'
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
  Placeholder
} from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBubble
    // Icon
  },
  data () {
    return {
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
          })
        ]
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
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
</style>
