# 开发过程中常用的快捷键 vscode

## 常用

**删除当前行**: `Cmd + Shift + K`

**复制当前行并粘贴到上方或下方**: 通常在代码编辑器中，你可以使用 `Shift + Option + Up` 或 `Shift + Option + Down` 来复制并移动行。

## 多光标

1. 选中一个词后，点击 command+d，每点一下会添加一个光标在相同词后
2. 按住 option，鼠标点击
3. option + command，然后按 ⬇️

## JavaScript

- link to javascript: typing `script:src`
- `clg` + `Tab`：快速打印 `console.log()`。
- `f` + `Tab`：创建一个匿名函数 `function() {}`。
- `af` + `Tab`：创建一个箭头函数 `() => {}`。
- `cd` + `Tab`：快速打印 `console.dir()`。
- `ce` + `Tab`：快速打印 `console.error()`。
- `cf` + `Tab`：快速定义一个命名函数 `function functionName() {}`。
- `forof` + `Tab`：快速生成一个针对可迭代对象的 `for...of` 循环。

### CSS

- `bg` + `Tab`：快速输入 `background`。
- `m` + `Tab`：快速输入 `margin`。
- `p` + `Tab`：快速输入 `padding`。
- `pos` + `Tab`：快速输入 `position` 属性。
- `w` + `Tab`：快速输入 `width`。
- `h` + `Tab`：快速输入 `height`。
- `@f` + `Tab`：快速生成一个 `@font-face` 规则。
- w+100 ⇒ width = 100px
- h+100 ⇒ height = 100px
- tac ⇒ text-align: center

### HTML

- `!` ：快速生成 HTML5 文档结构。
- `div.classname` ：生成 `<div class="classname"></div>`。
- `a:link` ：生成带有 href 属性的锚点标签。
- `ul>li.item$*5` ：生成一个带有 5 个带类名和序号的列表项的无序列表。
- ul>li\*3
  ```
      <ul>
          <li></li>
          <li></li>
          <li></li>
      </ul>
  ```
- `input:email` ：快速生成一个类型为电子邮件的输入框。
- `form:post` ：生成一个带有 POST 方法的表单标签。

### Lorem

- 输入  `lorem20`  并按下  `Tab`，会生成 20 个单词的随机文本。
- 输入  `lorem*3`  并按下  `Tab`，会生成 3 段随机文本。
