import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as n,o}from"./app-CknhMByI.js";const r={};function a(m,i){return o(),e("div",null,[n(` ---
title: Markdown 编辑器
---

<template>
  <div>
    <markdown-editor v-model="markdownContent"></markdown-editor>
    <button @click="submitContent">提交</button>
  </div>
</template>

<script>
import { MarkdownEditor } from 'vue-markdown-editor';
import axios from 'axios';

export default {
  components: { MarkdownEditor },
  data() {
    return {
      markdownContent: '',
    };
  },
  methods: {
    submitContent() {
      // 使用 Axios 提交数据到后台
      axios.post('/api/submit', { content: this.markdownContent })
        .then(response => {
          console.log('提交成功', response);
        })
        .catch(error => {
          console.error('提交失败', error);
        });
    },
  },
};
<\/script> `)])}const c=t(r,[["render",a],["__file","markdown-editer.html.vue"]]),s=JSON.parse('{"path":"/zh/markdown-editer.html","title":"","lang":"zh-CN","frontmatter":{"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/markdown-editer.html"}],["meta",{"property":"og:site_name","content":"逐雁电控"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-23T03:36:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-23T03:36:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T03:36:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1727061695000,"updatedTime":1727062604000,"contributors":[{"name":"Cygnomatic","email":"GzqHerry0813@outlook.com","commits":2}]},"readingTime":{"minutes":0.25,"words":74},"filePathRelative":"zh/markdown-editer.md","localizedDate":"2024年9月23日"}');export{c as comp,s as data};
