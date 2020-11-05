# CSS object-fit 属性

> 例如：对图片进行剪切，保留原始比例：

```css
img {
  width: 200px;
  height: 400px;
  object-fit: cover;
}
```

- ### fill

  > 被替换的内容正好填充元素的内容框。整个对象将完全填充此框。如果对象的宽高比与内容框不相匹配，那么该对象将被拉伸以适应内容框。

- ### contain

  > 被替换的内容将被缩放，以在填充元素的内容框时保持其宽高比。 整个对象在填充盒子的同时保留其长宽比，因此如果宽高比与框的宽高比不匹配，该对象将被添加“黑边”。

- ### cover

  > 被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。

- ### none

  > 被替换的内容将保持其原有的尺寸。

- ### scale-down
  > 内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。

!> 注意: Internet Explorer/Edge 15 或更早版本的浏览器不支持 object-fit 属性。

### CSS object-position 属性

> 根据容器大小重置图片的大小，并设置图片的位置：

```css
img {
  width: 200px;
  height: 400px;
  object-fit: none;
  object-position: 5px 10%;
}
```

> 指定 image 或 video 在容器中的位置。第一个值为 x 坐标位置的值，第二个值为 y 坐标位置的值。表示的方式有：

```css
object-position: 50% 50%;
object-position: right top;
object-position: left bottom;
object-position: 250px 125px;
```
