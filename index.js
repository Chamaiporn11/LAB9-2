(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[1514,976,57,92],[1514,0,231,410],[1514,1070,57,92],[1514,412,58,92],[1514,506,58,92],[1514,600,58,92],[1514,694,58,92],[1514,788,58,92],[1514,882,58,92],[1514,1164,54,92],[1514,1258,54,92],[0,0,1512,2016]]}
];


// symbols:



(lib.CachedBmp_12 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-14.3,-23,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-23,28.5,46);


(lib.Pic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0,0,0.2139,0.2074);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pic, new cjs.Rectangle(0,0,323.5,418.1), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Pic();
	this.instance.setTransform(0,0,1,1,0,0,0,161.7,209);
	this.instance.filters = [new cjs.BlurFilter(20, 20, 1)];
	this.instance.cache(-2,-2,328,422);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(-144.35,-8.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.7,-219,346,442);


// stage content:
(lib.Lesson9Sound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("ในคำว่ารักของเธอนั้นคือแบบไหนdedadediเวอร์ชั่นไทยเนื้อเพลงไทย",-1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(60));

	// L
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(197.75,358.9,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(197.75,358.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},59).wait(1));

	// O
	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(286.65,351.9,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_8();
	this.instance_3.setTransform(286.65,351.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_9();
	this.instance_4.setTransform(286.65,351.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},39).to({state:[{t:this.instance_4}]},20).wait(1));

	// V
	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(353.65,364.9,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_10();
	this.instance_6.setTransform(353.65,364.9,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_11();
	this.instance_7.setTransform(353.65,364.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},39).to({state:[{t:this.instance_7}]},20).wait(1));

	// E
	this.instance_8 = new lib.CachedBmp_5();
	this.instance_8.setTransform(416.8,338.9,0.5,0.5);

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.setTransform(431.1,361.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},39).to({state:[{t:this.instance_9}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({startPosition:0},20).wait(1));

	// Heart (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Amxh+QhukZF3BfQCUAkAwBuQBYh0C+gOQDYgEhYDnQiDD0kgCiQkhjBifkOg");
	var mask_graphics_1 = new cjs.Graphics().p("AnWiKQh4k2GYBoQCgApA0B4QBfh/DPgPQDqgFhgD/QiOEMk4CyQk6jUiskpg");
	var mask_graphics_2 = new cjs.Graphics().p("An7iXQiBlTG3BzQCtArA4CEQBniLDfgRQD8gFhnEWQiZEmlQDCQlTjni6lFg");
	var mask_graphics_3 = new cjs.Graphics().p("AogikQiKlvHXB8QC5AvA9CPQBuiXDvgSQEPgGhvEuQikE+lpDUQlrj8jIlgg");
	var mask_graphics_4 = new cjs.Graphics().p("ApFixQiTmMH3CGQDFAzBBCaQB2iiD/gUQEhgGh3FFQivFXmBDkQmEkPjVl8g");
	var mask_graphics_5 = new cjs.Graphics().p("Appi9QidmpIXCPQDSA4BECkQB+iuEPgVQEzgGh+FcQi6FwmZD0QmdkijimXg");
	var mask_graphics_6 = new cjs.Graphics().p("AqOjKQimnGI2CaQDfA6BJCwQCEi6EggWQFFgHiFF0QjGGJmxEEQm2k1jvmzg");
	var mask_graphics_7 = new cjs.Graphics().p("AqzjXQivniJWCjQDrA+BNC7QCNjFEvgYQFYgIiNGMQjRGhnKEWQnNlKj+nOg");
	var mask_graphics_8 = new cjs.Graphics().p("ArYjkQi4n/J2CtQD3BCBRDGQCUjRFAgaQFqgHiUGjQjcG6niEmQnnldkLnqg");
	var mask_graphics_9 = new cjs.Graphics().p("Ar9jxQjCobKWC2QEEBGBWDRQCbjdFQgbQF8gIibG7QjoHTn6E2Qn/lxkZoFg");
	var mask_graphics_10 = new cjs.Graphics().p("Ashj+QjMo3K2DAQEQBJBaDdQCjjpFfgdQGPgIijHSQjyHsoTFGQoYmEklohg");
	var mask_graphics_11 = new cjs.Graphics().p("AtGkLQjVpULVDJQEdBOBeDnQCqj1FwgdQGhgJiqHpQj+IForFXQowmYkzo8g");
	var mask_graphics_12 = new cjs.Graphics().p("AtrkXQjepxL2DTQEpBRBiDzQCykBGAgfQGzgJiyIBQkJIdpDFoQpJmslBpXg");
	var mask_graphics_13 = new cjs.Graphics().p("AuQkkQjnqOMVDdQE2BVBmD+QC5kNGQggQHGgKi5IYQkUI3pcF4Qpim/lOpzg");
	var mask_graphics_14 = new cjs.Graphics().p("Au1kxQjxqqM2DmQFCBZBqEJQDBkYGggiQHYgLjBIwQkfJPp0GJQp6nTlcqOg");
	var mask_graphics_15 = new cjs.Graphics().p("Avak+Qj6rHNVDxQFPBcBvEUQDIkkGwgjQHqgLjIJIQkqJoqNGYQqTnllpqrg");
	var mask_graphics_16 = new cjs.Graphics().p("Av+lLQkErjN1D6QFcBgByEfQDQkvHAglQH9gMjQJfQk1KBqlGqQqsn6l2rGg");
	var mask_graphics_17 = new cjs.Graphics().p("AwjlYQkNsAOVEEQFoBkB2EqQDYk7HQgnQIPgLjXJ2QlBKaq9G6QrEoNmErig");
	var mask_graphics_18 = new cjs.Graphics().p("AxIllQkWscO0ENQF1BoB7E1QDelHHhgoQIhgMjfKOQlLKzrWHKQrdohmRr9g");
	var mask_graphics_19 = new cjs.Graphics().p("AxtlxQkgs5PVEXQGBBrB/FAQDmlSHxgqQIzgMjmKlQlXLMruHaQr1o0mfsYg");
	var mask_graphics_20 = new cjs.Graphics().p("AySl+QkptWP1EgQGNBvCDFMQDulfIBgqQJFgNjtK9QliLksGHrQsOpImtszg");
	var mask_graphics_21 = new cjs.Graphics().p("Ay2mLQkztyQVEqQGZBzCIFWQD1lqIRgsQJYgNj1LUQltL9sfH8Qsmpcm6tPg");
	var mask_graphics_22 = new cjs.Graphics().p("AzbmYQk8uPQ0E0QGmB3CMFhQD8l2IigtQJqgOj9LsQl4MWs3IMQs/pvnHtrg");
	var mask_graphics_23 = new cjs.Graphics().p("A0AmlQlFurRUE9QGyB7CQFsQEEmCIygvQJ8gNkEMDQmDMutPIdQtYqDnVuGg");
	var mask_graphics_24 = new cjs.Graphics().p("A0kmyQlPvIR0FHQG/B+CUF4QELmNJCgxQKPgOkMMaQmONItoItQtwqWniuig");
	var mask_graphics_25 = new cjs.Graphics().p("A1Jm+QlYvlSTFRQHMCCCYGCQETmZJSgyQKhgOkTMyQmaNguAI+QuJqqnvu9g");
	var mask_graphics_26 = new cjs.Graphics().p("A1unLQliwCS0FbQHYCGCcGNQEbmkJig0QKzgPkbNKQmkN5uYJOQuiq9n9vZg");
	var mask_graphics_27 = new cjs.Graphics().p("A2TnYQlrweTTFkQHlCJChGZQEhmwJyg1QLGgQkiNhQmwOSuwJfQu7rRoKv0g");
	var mask_graphics_28 = new cjs.Graphics().p("A24nlQl0w7T0FuQHxCNCkGkQEqm8KCg2QLYgQkqN4Qm7OrvJJvQvTrkoYwQg");
	var mask_graphics_29 = new cjs.Graphics().p("A3dnyQl9xXUTF3QH+CRCpGvQEwnIKTg3QLqgRkxOQQnGPEvhJ/Qvsr4omwrg");
	var mask_graphics_30 = new cjs.Graphics().p("A4Bn/QmHx0UzGCQIKCUCtG6QE4nUKig5QL9gQk5OnQnRPcv5KQQwFsLoyxHg");
	var mask_graphics_31 = new cjs.Graphics().p("A4moLQmRyRVTGLQIXCYCxHGQFAngKyg6QMPgSlAO/QncP2wSKgQwdsfpAxig");
	var mask_graphics_32 = new cjs.Graphics().p("A5LoYQmaytVzGUQIjCcC1HRQFHnsLDg8QMhgRlHPWQnoQOwqKxQw2szpNx9g");
	var mask_graphics_33 = new cjs.Graphics().p("A5wolQmjzKWTGeQIvCgC6HcQFPn3LSg+QM0gSlPPuQnzQnxCLBQxOtGpcyZg");
	var mask_graphics_34 = new cjs.Graphics().p("A6VoyQmszmWyGoQI8CjC+HnQFWoDLjg/QNGgTlWQGQn+Q/xbLSQxntappy0g");
	var mask_graphics_35 = new cjs.Graphics().p("A66o/Qm10DXSGyQJJCnDBHyQFeoPLzhAQNYgTleQdQoJRZxzLiQx/ttp3zRg");
	var mask_graphics_36 = new cjs.Graphics().p("A7epLQm/0gXyG7QJVCrDGH9QFloaMDhCQNqgTllQ0QoURxyMLzQyYuBqDzrg");
	var mask_graphics_37 = new cjs.Graphics().p("A8DpYQnI09YSHFQJhCvDKIIQFtomMThDQN9gUltRMQofSKykMDQyxuUqR0Hg");
	var mask_graphics_38 = new cjs.Graphics().p("A8oplQnR1ZYxHPQJuCyDPITQF0oyMjhFQOPgUl0RjQorSky8MTQzJuoqf0ig");
	var mask_graphics_39 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_40 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_41 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_42 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_43 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_44 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_45 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_46 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_47 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_48 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_49 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_50 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_51 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_52 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_53 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_54 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_55 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_56 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_57 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_58 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");
	var mask_graphics_59 = new cjs.Graphics().p("A9NpyQnb12ZSHZQJ6C2DTIeQF7o+M0hGQOhgUl8R6Qo1S8zVMkQziu7qs0+g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:360.89,y:322.3515}).wait(1).to({graphics:mask_graphics_1,x:360.3665,y:322.0827}).wait(1).to({graphics:mask_graphics_2,x:359.8623,y:321.828}).wait(1).to({graphics:mask_graphics_3,x:359.3492,y:321.5842}).wait(1).to({graphics:mask_graphics_4,x:358.8507,y:321.3171}).wait(1).to({graphics:mask_graphics_5,x:358.3251,y:321.0389}).wait(1).to({graphics:mask_graphics_6,x:357.8231,y:320.7841}).wait(1).to({graphics:mask_graphics_7,x:357.2975,y:320.5404}).wait(1).to({graphics:mask_graphics_8,x:356.7931,y:320.2717}).wait(1).to({graphics:mask_graphics_9,x:356.2823,y:320.0029}).wait(1).to({graphics:mask_graphics_10,x:355.7716,y:319.7481}).wait(1).to({graphics:mask_graphics_11,x:355.257,y:319.5044}).wait(1).to({graphics:mask_graphics_12,x:354.7348,y:319.2373}).wait(1).to({graphics:mask_graphics_13,x:354.2409,y:318.9685}).wait(1).to({graphics:mask_graphics_14,x:353.7175,y:318.7138}).wait(1).to({graphics:mask_graphics_15,x:353.2028,y:318.4356}).wait(1).to({graphics:mask_graphics_16,x:352.6898,y:318.1918}).wait(1).to({graphics:mask_graphics_17,x:352.1813,y:317.9231}).wait(1).to({graphics:mask_graphics_18,x:351.6769,y:317.6683}).wait(1).to({graphics:mask_graphics_19,x:351.1514,y:317.3996}).wait(1).to({graphics:mask_graphics_20,x:350.6506,y:317.1575}).wait(1).to({graphics:mask_graphics_21,x:350.125,y:316.8887}).wait(1).to({graphics:mask_graphics_22,x:349.6206,y:316.6339}).wait(1).to({graphics:mask_graphics_23,x:349.1121,y:316.3652}).wait(1).to({graphics:mask_graphics_24,x:348.5992,y:316.1215}).wait(1).to({graphics:mask_graphics_25,x:348.0845,y:315.8433}).wait(1).to({graphics:mask_graphics_26,x:347.561,y:315.5885}).wait(1).to({graphics:mask_graphics_27,x:347.0671,y:315.3198}).wait(1).to({graphics:mask_graphics_28,x:346.545,y:315.0526}).wait(1).to({graphics:mask_graphics_29,x:346.0303,y:314.8089}).wait(1).to({graphics:mask_graphics_30,x:345.5197,y:314.5541}).wait(1).to({graphics:mask_graphics_31,x:345.0088,y:314.2854}).wait(1).to({graphics:mask_graphics_32,x:344.5044,y:314.0167}).wait(1).to({graphics:mask_graphics_33,x:343.9789,y:313.7729}).wait(1).to({graphics:mask_graphics_34,x:343.4768,y:313.5182}).wait(1).to({graphics:mask_graphics_35,x:342.9512,y:313.24}).wait(1).to({graphics:mask_graphics_36,x:342.4528,y:312.9728}).wait(1).to({graphics:mask_graphics_37,x:341.9396,y:312.7291}).wait(1).to({graphics:mask_graphics_38,x:341.4354,y:312.4743}).wait(1).to({graphics:mask_graphics_39,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_40,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_41,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_42,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_43,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_44,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_45,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_46,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_47,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_48,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_49,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_50,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_51,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_52,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_53,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_54,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_55,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_56,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_57,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_58,x:340.912,y:312.2056}).wait(1).to({graphics:mask_graphics_59,x:340.912,y:312.2056}).wait(1));

	// Picture
	this.instance_10 = new lib.Tween1("synched",0);
	this.instance_10.setTransform(346.7,299.3);

	this.instance_11 = new lib.Pic();
	this.instance_11.setTransform(346.7,225,1,1,0,0,0,161.7,209);

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},39).to({state:[{t:this.instance_11}]},20).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,regX:161.7,regY:209,y:225,mode:"independent"},39).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(495,385.1,27,74.39999999999998);
// library properties:
lib.properties = {
	id: '46E957B03C54F247993742B95360879D',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"},
		{src:"sounds/ในคำว่ารักของเธอนั้นคือแบบไหนdedadediเวอร์ชั่นไทยเนื้อเพลงไทย.mp3", id:"ในคำว่ารักของเธอนั้นคือแบบไหนdedadediเวอร์ชั่นไทยเนื้อเพลงไทย"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['46E957B03C54F247993742B95360879D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;