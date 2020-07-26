/**
 * @author lifeChat
 * @time 2020-7-26
 * @wechat xiaqi17
 * 
 * 变量命名方式，驼峰式命名
 */

 //水滴数量 10
 let count = 10;
 //游戏关卡1
 let level = 1;
 //游戏困难度  定义为困难
 var type = 'diff';

  function Game(){
      //游戏初始化，将所有dom结构，用this转换为全局变量
      this.oWrap = $("#wrap");
      this.oBg = $("#bg");
      this.oValue = $("#value");
      this.oTxt = $("#txt");
      this.Mask = $("#mask");
      this.LevWrap = $("#level");
      this.Next = $("#next");
      this.oBegin = $("#begin");
      this.className = {
          imgClass:'pic',
          dropClass:'lit'
      };
//图片存储
      this.aImg = [];
      this.timer = null;
      //水滴4个阶段的图片
      this.imgSrc = ['../image/0.png','../image/1.png','../image/2.png','../image/3.png','../image/4.png']
      //水滴点击弹出的走向图片
      this.dropImgSrc = ['../image/u.png','../image/d.png','../image/l.png','../image/r.png'];
      //水滴行数
      this.row = 6;
      //水滴列数
      this.col = 6;      
      }

      Game.prototype = {
          say:function(){

          }
      }


      