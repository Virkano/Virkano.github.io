# CSS animation

!> 注释：Internet Explorer 9，以及更早的版本，不支持 @keyframe 规则或 animation 属性。

```css
div {
  animation: myfirst 5s;
  -moz-animation: myfirst 5s; /* Firefox */
  -webkit-animation: myfirst 5s; /* Safari 和 Chrome */
  -o-animation: myfirst 5s; /* Opera */
}
```

> 实例 ：

```css
@keyframes myfirst {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

@-moz-keyframes myfirst /* Firefox */ {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}

@-o-keyframes myfirst /* Opera */ {
  from {
    background: red;
  }
  to {
    background: yellow;
  }
}
```

<iframe src="../notes/css-动画1.html" style="border:none; height: 200px"></iframe>

!> [W3C 传送门](https://www.w3school.com.cn/css3/css3_animation.asp)

### CSS3 transition 属性

```css
div {
  width: 100px;
  transition: width 2s;
  -moz-transition: width 2s; /* Firefox 4 */
  -webkit-transition: width 2s; /* Safari 和 Chrome */
  -o-transition: width 2s; /* Opera */
}

div:hover {
  width: 300px;
}
```

> 图方便的写法（只有两个参数是位置可以互换）

```
transition: 0.5s all;
```

?> 语法 ： <code>transition: property duration timing-function delay;</code>

```bash
transition-property            规定设置过渡效果的 CSS 属性的名称。

transition-duration            规定完成过渡效果需要多少秒或毫秒。

transition-timing-function    规定速度效果的速度曲线。

transition-delay            定义过渡效果何时开始。

```

```css
.transition-obg {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f13232;
  background: #fd4733a3;
  border-radius: 5px;
  z-index: 10;
  transition: all 1s;
  cursor: grab;
}
.transition-obg:hover {
  transform: translate3d(10px, -10px, 0px);
}
```
!> [W3C 传送门](https://www.w3school.com.cn/cssref/pr_transition.asp)

### 3D 旋转 rotate

```css
div
{
transform: rotateX(120deg);
-webkit-transform: rotateX(120deg);    /* Safari 和 Chrome */
-moz-transform: rotateX(120deg);    /* Firefox */
}

/* rotate3d(x,y,z,angle) */

```

?> X 轴平行屏幕水平、Y 轴平行屏幕竖直，Z 轴垂直穿过屏幕

!> 3D旋转的Z轴rotateZ相当于2D旋转的rotate <code>transform: rotate(120deg) == transform: rotateZ(120deg)</code>

!> [W3C 传送门](https://www.w3school.com.cn/css3/css3_3dtransform.asp)