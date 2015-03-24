# touch-slider
a minimalist and easy to use touch slider.
# how to use it
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="touch-slider.js"></script>
<script>
$(function(){
    var touchSlider = new TouchSlider();
    touchSlider.init(document.getElementById('touch-slider'), 'img');
})
</script>
```
or 
```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="touch-slider.js"></script>
<script>
$(function(){
    var touchSlider = new TouchSlider();
    touchSlider.init('#touch-slider', 'img');
})
</script>
```
'img' is the tag name item use in the slider, the html source is like this :
```html
<div id="touch-slider" class="touch-slider">
        <div class="touch-slider-content-slider">
	        <div class="touch-slider-content">
	            <img src="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg" width="400" height="300"/>
		        <img src="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg" width="400" height="300"/>
	            <img src="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg" width="400" height="300"/>
	            <img src="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg" width="400" height="300"/>
	            <img src="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg" width="400" height="300"/>
	            <img src="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg" width="400" height="300"/>
	            <img src="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg" width="400" height="300"/>
	            <img src="http://2.bp.blogspot.com/_iM0ff4trGsE/TQEPW9Fr4SI/AAAAAAAAA7c/EX7NT5K0rTc/s400/happy-kitten-kittens-5890512-1600-1200.jpg" width="400" height="300"/>
	        </div>
        </div>
        <a class="touch-slider-prev"></a>
        <a class="touch-slider-next"></a>
    </div>
```

Please don't change the class name of the div.

the slider comes with his css which can be updated to your needs :
```css
  .touch-slider {
        width: 400px;
        position: relative;
    }
    .touch-slider-content {
        overflow: hidden;
        display: block;
    }
    .touch-slider-content-slider{
        overflow-x: scroll;
        overflow: hidden;
    }
    img {
        float: left;
    }
    .touch-slider-prev, .touch-slider-next {
        position: absolute;
        right: auto;
        left: 20px;
        width: 50px;
        height: 50px;
        top: 50%;
        margin-top: -25px;
        border-radius: 50%;
        background: #fff;
        opacity: 0.6;
    }
    .touch-slider-next {
        right: 20px;
        left: auto;
    }
```
