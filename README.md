# 50projects50days

[toc]

## 1-Introduction & Setup

### Some Shortcuts

- Use `H1.myclass` for classes and `H1#myids` for ids
- `div\*3` gives you three divs
- link to javascript: typing `script:src`

### Useful plug-in

- Live server
- Auto Rename Tag
- Bracket Pair Color DLW
- Prettier - Code formatter

### Front

- <a>https://fontawesome.com/</a>

- <a>https://cdnjs.com/</a> and search 'font-awesome' copy and paste above link of css

- Import in css
  - go to https://fonts.google.com/ and find the font style **Roboto**
  - select @import and copy to style.css

### starter css

以下是这些 CSS 属性的中文讲解：

```css
* {
    box-sizing: border-box;
}
```
- `*` 是一个通用选择器，表示选择页面上的所有元素。
- `box-sizing: border-box` 指定了元素的宽度和高度包括内边距和边框，但不包括外边距。这样可以更容易地控制元素的大小和布局。

```css
body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    margin: 0; 
}
```
- `body` 选择器应用于整个网页的主体。
- `font-family: 'Roboto', sans-serif` 设置网页的默认字体为 Roboto，如果 Roboto 不可用，则使用 sans-serif 作为后备字体。
- `display: flex` 将 `body` 元素的布局方式设为弹性盒模型（flexbox）。
- `flex-direction: column` 设置弹性盒子内的元素按列方向排列。
- `align-items: center` 将弹性盒子内的元素在交叉轴（垂直轴）上居中对齐。
- `justify-content: center` 将弹性盒子内的元素在主轴（水平轴）上居中对齐。
- `height: 100vh` 将 `body` 元素的高度设为视口高度的 100%。
- `overflow: hidden` 隐藏任何超出 `body` 元素边界的内容。
- `margin: 0` 将 `body` 元素的外边距设为 0，去除默认的外边距。

#### 1. box-sizing

https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

**备注：** 对于新的 web 站点，你可能希望首先将 box-sizing 设置为 border-box，如下所示：

CSSCopy to Clipboard

```
* {
  box-sizing: border-box;
}
```

这使得处理元素大小的工作变得容易得多，并且通常消除了在布局内容时可能遇到的许多陷阱。然而，在某些情况下，你应谨慎使用这个属性。例如：你正在编写一个将由其他人使用的共享组件库，如果他们网站的其余部分没有设置此值，他们可能会发现很难使用你的组件库。

#### 2. display

`display: flex;`

https://developer.mozilla.org/zh-CN/docs/Web/CSS/display

#### 3. margin

`margin: 0; `

https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin

上下左右外边距属性

#### 4. flex-direction

`flex-direction: column;`

**`flex-direction`** 属性指定了内部元素是如何在弹性容器中布局的，定义了主轴的方向（正方向或反方向）。

#### 5. justify-content

`justify-content: center;`

**`justify-content`** 属性定义浏览器如何沿着弹性容器的[主轴](https://developer.mozilla.org/zh-CN/docs/Glossary/Main_Axis)和网格容器的行向轴分配内容元素之间和周围的空间。

https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content

#### 6. height

`height: 100vh;`

`100vh`中的`vh`是表示视口高度的一个单位，`vh`的意思是`viewport height`，即视口高度的百分之一。`100vh`表示的是视口高度的100%，也就是整个视口的高度。

#### 7. overflow

`overflow: hidden;`

其设置了元素溢出时所需的行为——即当元素的内容太大而无法适应它的[区块格式化上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context)时。

https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow

### css单位 🌟

#### Viewport Units - 视口单位

- `vw` (viewport width): 视口宽度的百分之一。
- `vh` (viewport height): 视口高度的百分之一。
- `vmin`(viewport minimum): 视口宽度和高度中较小的那个的百分之一。
- `vmax`(viewport maximum): 视口宽度和高度中较大的那个的百分之一。

#### Absolute Length Units - 绝对长度单位

- `px` (像素 pixels): 屏幕上的一个物理点。
- `cm` (厘米 centimeters): 物理长度单位。
- `mm` (毫米 millimeters): 物理长度单位。
- `in` (英寸 inches): 1英寸等于2.54厘米。
- `pt` (点 points): 1点等于1/72英寸。
- `pc` (派卡 picas): 1派卡等于12点。

#### Relative Length Units - 相对长度单位

- `%` (百分比 percent): 相对于父元素的大小。
- `em`(em): 相对于当前元素的字体大小。
- `rem`(root em): 相对于根元素的字体大小。
- `ex`: 当前字体的 x-height，高度约等于小写字母“x”的高度。
- `ch`(character): 当前字体的“0”字符的宽度。
- `lh`(line height): 当前元素行高的倍数。
- `vw`, `vh`, `vmin`, `vmax`: 视口的相对单位。

#### 时间单位

- `s` (秒 seconds): 时间单位。
- `ms` (毫秒 milliseconds): 时间单位，1毫秒等于1/1000秒。

#### 角度单位

- `deg` (度 degrees): 角度单位。
- `grad` (梯度 gradians): 角度单位，1梯度等于0.9度。
- `rad` (弧度 radians): 角度单位。
- `turn` (圈 turns): 角度单位，1圈等于360度。
