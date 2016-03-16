var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	title: 'gohudong',
  	logo:'/images/logo.png',
  	navbar:['产品','体验','现场',''],
  	slider:[
  		{
  			img:'/images/slider01.jpg',
  			textH1:'打造全新互联网+婚礼',
  			textH3:'火热现场，一触即发',
  			textP:'应用高科技，实现LED大屏、移动互联网、人屏互动的完美融合，借助互动游戏制造、互动产品体验、O2O整合、社会化娱乐等方式，开创互联网婚礼新格局。',
  			btnUrl:'###'
  		}
  	],
    charactors:[
      {
        img:'/images/img392_01.png',
        title:'人屏互动 嗨翻现场',
        dec:'GO互动为来宾提供二维码进入互动大屏幕，参与心动小游戏、抽奖等环节，通过大屏幕互动来提高来宾的参与感，增强互动性，使现场气氛嗨到停不下来！'
      },
      {
        img:'/images/img392_02.png',
        title:'定制化服务',
        dec:'在互动环节中，GO互动融入用户元素，使用户瞬间变成游戏主角。还可根据特定的场所，制定符合场景的互动环节，全方位打造定制化服务！'
      },
      {
        img:'/images/img392_03.png',
        title:'720现场',
        dec:'GO互动将采用720全景技术，以720度可旋转照片还原精彩瞬间，随时随地与他人分享美好回忆!'
      }
    ],
    cases:[
      {
        img:'/images/icon01.png',
        title:'婚庆',
        dec:'随着80、90后一批批开始步入婚姻殿堂，GO互动在整个婚礼环节加入新人元素，通过大屏幕与来宾之间互动，增加来宾的参与感，为新人打造个性化婚礼！'
      },
      {
        img:'/images/icon02.png',
        title:'会展',
        dec:'GO互动在后期会增加用户签到，弹幕、投票等功能，使企业活动、行业发布会等现场活动气氛活跃，提高整个会场的互动性！'
      },
      {
        img:'/images/icon03.png',
        title:'餐饮',
        dec:'GO互动设有排位等小游戏，使排位点餐的客人沉浸在游戏中，时间不知不觉的度过，从而提高客人对服务行业的满意度！'
      },
      {
        img:'/images/icon04.png',
        title:'赛事',
        dec:'在这里，你可以通过大屏幕抒发心中的喜悦，与GO互动一起见证赛事的精彩一幕，在这里，你将找到自己的组织！'
      }
    ],
    activities:[
      {
        img:'/images/img292_01.jpg',
        title:'拯救新娘（心动游戏）'
      },
      {
        img:'/images/img292_02.jpg',
        title:'追新娘（心动抽奖）'
      },
      {
        img:'/images/img292_03.jpg',
        title:'婚姻保卫战（心动游戏）'
      },
      {
        img:'/images/img292_04.jpg',
        title:'找新郎（心动游戏）'
      }
    ],
    albums:[
      {
        img:'/images/img393_01.jpg',
        link:'http://720yun.com/t/ba53b225t7h'
      },
      {
        img:'/images/img393_02.jpg',
        link:'http://720yun.com/t/9e3m087tb5n'
      },
      {
        img:'/images/img393_03.jpg',
        link:'http://720yun.com/t/b64mf29tuvw'
      }
    ]
  });
});

module.exports = router;
