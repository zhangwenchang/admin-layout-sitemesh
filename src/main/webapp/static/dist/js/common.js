var CookieUtil = {
        // 设置cookie
        set : function (name, value, expires, domain, path, secure) {
            var cookieText = "";
            cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
            if (expires instanceof Date) {
                cookieText += "; expires=" + expires.toGMTString();
            }
            if (path) {
                cookieText += "; path=" + path;
            }
            if (domain) {
                cookieText += "; domain=" + domain;
            }
            if (secure) {
                cookieText += "; secure";
            }
            document.cookie = cookieText;
        },
        // name=value; expires=expiration_time; path=domain_path; domain=domain_name; secure
        // 获取cookie
        get : function (name) {
            var cookieName = encodeURIComponent(name) + "=",
                cookieStart = document.cookie.indexOf(cookieName),
                cookieValue = "";
            if (cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf (";", cookieStart);
                if (cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue; 
        },
        // 删除cookie
        unset : function (name, domain, path, secure) {
            this.set(name, "", Date(0), domain, path, secure);
        }
    };


var apiUrl = location.origin + '/test-admin';
var ctx = location.origin + '/test-admin';
//var weburl = "https://localhost:8080/gaga_sns_web/";
//var qiniu = "https://images.gagahi.com/";
var weburl = CookieUtil.get("weburl");

var qiniu =  CookieUtil.get("qiniu");

var weburl = "https://www.gagahi.com/";
var qiniu = "https://images.gagahi.com/";
var qiniuVedio = "https://sources.gagahi.com/";
var Qiniu_UploadUrl = "https://upload.qiniup.com";


var facePath= apiUrl + "/images/facebag/qqFace/";

var nav_class = {
	'1': 'fa-cog',
	'2': 'fa-cogs',
	'3': 'fa-user',
	'4': 'fa-cubes',
	'5': 'fa-share',
	'6': 'fa-commenting-o',
	'7': 'fa-cc-visa',
	'8': 'fa-facebook-official',
	'19': 'fa-map-o',
	'37': 'fa-user-plus',
	'105': 'fa-group',
	'96': 'fa-institution',
	'90': 'fa-tumblr-square',
	'85': 'fa-expeditedssl',
	'80': 'fa-user-md',
	'77': 'fa-rebel',
	'66': 'fa-share-alt',
	'62': 'fa-slideshare'
};
var mode_position = {
		'100004771': '/view/account/userList.html',
		'100004772': '/view/account/groupList.html',
		'100004776': '/view/account/companyList.html',
		'10423283': '/view/account/roleList.html',
		'73081952': '/view/global/giftreal.html',
		'52118477': '/view/global/giftvirtual.html',
		'63285012': '/view/global/action.html',
		'68677118': '/view/global/ihomecommend.html',
		'60921480': '/view/global/privatelettermodel.html',
		'79988984': '/view/member/memberinfo.html',
		'19268014': '/view/member/member.html',
		'19268015': '/view/member/charslist.html',
		'19268016': '/view/member/reportList.html',
		'19268017': '/view/member/appReportList.html',
		'19268018': '/view/member/blackUserList.html',
		'52246510': '/view/module/messagelist.html',
		'56845868': '/view/module/messageimglist.html',
		'27059490': '/view/module/realgift.html',
		'57757581': '/view/module/virtualgift.html',
		'25762862': '/view/module/zoneList.html',
		'108173344': '/view/module/commList.html',
		'51633901': '/view/other/feedback.html',
		'43114697': '/view/other/blacklist.html',
		'43663249': '/view/message/offiAccountList.html',
		'17826781': '/view/message/topZoneList.html',
		'63597786': '/view/message/massmessage.html',
		'57038252': '/view/finance/goldlist.html',
		'43546646': '/view/finance/financegoldreport.html',
		'85635953': '/view/finance/monthlyuserdistribution.html',
		'61846259': '/view/finance/rechargeconsum.html',
		'62231897': '/view/finance/orderlist.html',
		'47654978': '/view/finance/unrechargelist.html',
		'70950023': '/view/finance/promotionSalary.html',
		'89672862': '/view/finance/famaleSalary.html',
		'59459264': '/view/promotion/promotionList.html',
		'76190796': '/view/promotion/promotionmember.html',
		'66452845': '/view/promotion/salaryList.html',
		'84886429': '/view/promotion/changeList.html',
		'23857656': '/view/promotionme/mymember.html',
		'32753707': '/view/promotionme/myCommission.html',
		'91082508': '/view/promotionme/myChange.html',
		'59686322': '/view/promotionme/memberbound.html',
		'42677799': '/view/module/adcategory.html',
		'70380012': '/view/module/adarea.html',
		'66458904': '/view/module/aditem.html',
		'74146244': '/view/global/giftCategory.html',
		'100052004': '/view/global/emoticon.html',
		'100052005': '/view/global/emoticonDetail.html',
		'94985808': '/view/other/syssensitiveWords.html',
		'32757155': '/view/other/sensitivelist.html',
		'34241886': '/view/promotionme/mypromotdetail.html',
		'108698319': '/view/module/imlist.html',
		'86903422': '/view/promotion/agentlist.html',
		'74070793': '/view/promotion/commissionsetting.html',
		'58638637': '/view/finance/promoterList.html',
		'32757110': '/view/agent/agentNotice.html',
		'32757111': '/view/agent/agentPage.html',
		'32757113': '/view/agent/agentSalary.html',
		'32757114': '/view/ambassador/ambassaNotice.html',
		'32757116': '/view/ambassador/ambassaPage.html',
		'32757115': '/view/ambassador/ambassaSalary.html',
		'59686366': '/view/promotionme/cardMember.html',
		'32757120': '/view/agent/agentManage.html',
		'32757121': '/view/module/vedioList.html',
		'32757122': '/view/module/adcountList.html',
		'32757123': '/view/module/gagaAdcountList.html',
		'32757124': '/view/finance/commissionstaff.html',

		'10000001': '/view/aanalysis/survey/overallTrend.html',
		'10000002': '/view/aanalysis/survey/realTimeStatistics.html',
		// '10000003': '/view/aanalysis/userbasicdata/regionaldistribution.html',
		'10000004': '/view/aanalysis/userbasicdata/regionalDistribution.html',//81
		'10000005': '/view/aanalysis/userbasicdata/userAttribute.html',//
		'10000006': '/view/aanalysis/userbasicdata/channelStatistics.html',//
		'10000007': '/view/aanalysis/userbasicdata/equipmentModel.html',
	   //	'10000008': '/view/aanalysis/userbasicdata/regionaldistribution.html',
		'10000009': '/view/aanalysis/userbasicdata/rechargeListr.html',
		'10000010': '/view/aanalysis/userbasicdata/conListc.html',
		'10000011': '/view/aanalysis/userbasicdata/rechargetyper.html',
		'10000012': '/view/aanalysis/userbasicdata/youhuiquany.html',

		'10000100': '/view/aanalysis/userParticipation/newUser.html',//91
		'10000101': '/view/aanalysis/userParticipation/accessPage.html',//92
		'10000102': '/view/aanalysis/userParticipation/retainedUser.html',//93
		'10000103': '/view/aanalysis/userParticipation/activeUser.html',//94
		'10000104': '/view/aanalysis/userParticipation/silentUser.html',//95
		'10000105': '/view/aanalysis/extensionAnalysis/remittanceTable.html',//97
		'10000106': '/view/aanalysis/extensionAnalysis/revenue/revenue.html',//98
		'10000107': '/view/aanalysis/extensionAnalysis/achievement/achievement.html',//99
		'10000108': '/view/aanalysis/extensionAnalysis/revenueAndAchievement/revenueAndAchievement.html',//100
		'10000109': '/view/aanalysis/extensionAnalysis/newInvitations/newInvitations.html',//101
		'10000110': '/view/aanalysis/extensionAnalysis/spreadNumberAll/spreadNumberAll.html',//102
		'10000111': '/view/aanalysis/extensionAnalysis/employeeAnalysisTable.html',//103
		'10000112': '/view/aanalysis/extensionAnalysis/employeeConsumTable.html',//104
		'10000113': '/view/aanalysis/activityAnalysis/agentConsumption/agentConsumption.html',//106
		'10000114': '/view/aanalysis/activityAnalysis/activityPageClicks.html',//107
		'10000115': '/view/aanalysis/activityAnalysis/advertisingMap/advertisingMapPC.html',//108
		//109金币销售明细	
		'10000116': '/view/finance/goldSaleDetail.html',
		//110大使卡销售明细
		'10000117': '/view/finance/reachCardSaleDetail.html',
		//111字符包管理
		'10000118': '/view/module/charPackageManager.html',
		'10000119': '/view/finance/wetchatAliPaySaleDetail.html',
		'10000120': '/view/finance/dashikamanDetail.html',
		'10000121': '/view/finance/memberIdSearch.html',
		'100004773': '/view/other/serveList.html',
		'100004774': '/view/other/chatList.html',
		'100004775': '/view/other/intelligentsem.html',
		'100004775': '/view/other/machinememberinfo.html',
		'100050001': '/view/module/tuiguangClick.html',
		'100051001': '/view/module/exploreManager.html'
		,'100052001':'/view/other/travleRecond.html'	
		,'100052002':'/view/other/travleMessage.html'	
			,'100052003':'/view/global/bubbleManager.html'
	, '100052006': '/view/module/heartRedPackage.html'
	, '100052456': '/view/module/adCommerce.html'
	, '100052457': '/view/module/adPublish.html'
	, '100052458': '/view/module/adPublishClass.html'

};

(function($) {
	//字符重编码
	$.extend($.string || ($.string = {}), {
		encodeHtmlEp: function(str) {
			return String(str).replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function(r) {
				return "&#" + r.charCodeAt(0) + ";";
			});
		},
		encodeHtml: function(str) {
			return String(str).replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(r) {
				return "&#" + r.charCodeAt(0) + ";";
			}).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g, "<br />").replace(/\r/g, "<br />");
		},
		encodeScript: function(str) {
			return String(str).replace(/[\\"']/g, function(r) {
				return "\\" + r;
			}).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\x01/g, "\\x01");
		},
		encodeURIComponent: function(str) {
			return encodeURIComponent(String(str));
		},
		encodeRegExp: function(str) {
			return String(str).replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function(a, b) {
				return "\\" + a;
			});
		},
		encodeNone: function(str) {
			return String(str);
		},
		decodeHtml: function(str) {
			var m = {
				amp: '&',
				'lt': '<',
				'gt': '>',
				'quot': '"',
				'apos': "'",
				'nbsp': ' '
			};
			return String(str).replace(/&(([a-z]+)|(#([0-9]+))|(#x([0-9a-f]+)));|(\<br\s*\/*\>)/ig, function($m, $00, $w, $01, $d, $02, $h, $l) {
				if ($w) {
					return m[$w] || $m;
				}
				if ($d) {
					return String.fromCharCode(parseInt($d, 10));
				}
				if ($h) {
					return String.fromCharCode(parseInt($h, 16));
				}
				if ($l) {
					return '\n';
				}
				return $m;
			});
		},
		encodeFormatMore: function(str, length) {
			return $.string.encodeNone($.formatMore(str, length));
		}
	});

	//长度截取方法，此处调用上方的 $.string.encodeFormatMore(str, len), 而不使用此方法
	$.formatMore = function(str, len) {
		var _str = String(str);
		if (_str.length > len) {
			_str = '<span title="' + _str + '">' + _str.substring(0, len) + '...<span>';
		}
		return _str;
	};

	//模板生成
	$.tmpl = function(strTmpl, data) {
		function tmpl(strTmpl) {
			// 字符串JSON转义
			function sstringify(data) {
				if (typeof(JSON) !== 'undefined') {
					return JSON.stringify(data);
				}
				var e = {
					"\u0000": "\\u0000",
					"\u0001": "\\u0001",
					"\u0002": "\\u0002",
					"\u0003": "\\u0003",
					"\u0004": "\\u0004",
					"\u0005": "\\u0005",
					"\u0006": "\\u0006",
					"\u0007": "\\u0007",
					"\b": "\\b",
					"\t": "\\t",
					"\n": "\\n",
					"\u000b": "\\u000b",
					"\f": "\\f",
					"\r": "\\r",
					"\u000e": "\\u000e",
					"\u000f": "\\u000f",
					"\u0010": "\\u0010",
					"\u0011": "\\u0011",
					"\u0012": "\\u0012",
					"\u0013": "\\u0013",
					"\u0014": "\\u0014",
					"\u0015": "\\u0015",
					"\u0016": "\\u0016",
					"\u0017": "\\u0017",
					"\u0018": "\\u0018",
					"\u0019": "\\u0019",
					"\u001a": "\\u001a",
					"\u001b": "\\u001b",
					"\u001c": "\\u001c",
					"\u001d": "\\u001d",
					"\u001e": "\\u001e",
					"\u001f": "\\u001f",
					"\"": "\\\"",
					"\\": "\\\\"
				};
				return '"' + data.replace(/[\s\S]/g, function(a) {
					return (e[a] || a);
				}) + '"';
			}

			var code = ['var  ____internal  = [];', 'with (data) {', '    ____internal .push(' + strTmpl.replace(/(^|%\>)([\s\S]*?)(\<%|$)/g, function($m, $1, $2, $3) {
				return $1 + sstringify($2) + $3;
			}).replace(/\<%[\s]*=([\s\S]*?)%\>/g, function($m, $1) {
				return $1.match(/^\s*\$\.string\.encode\w+\([\s\S]*\)\s*$/) ? (', ' + $1 + ', ') : (', $.string.encodeHtml(' + $1 + '), ');
			}).replace(/\<%([\s\S]*?)%\>/g, ');\n$1\n\t ____internal .push(') + ');', '}', 'return  ____internal .join("");'].join('\n');
			var tf = new Function('data', '$', code);
			return (function(data) {
				return tf(data, $);
			});
		}

		return tmpl(strTmpl)(data);
	};

	//转换时间
	$.convertDate = function(time) {
		var date = new Date(time);
		return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	};

	//表情包转换
	$.getFaceImg = function(str) {
		if (str && ((str.indexOf('[') != -1 && str.indexOf(']') != -1) || str.indexOf('&lt;') != -1)) {
			var strNew = '',
				_html = '',
				_html1 = '',
				_html2 = '',
				_html3 = '';
			strNew = str.replace(/[a-z]+\_/g, '');
			_html = strNew.replace(/\[/g, ('<img src="' + facePath));
			_html1 = _html.replace(/\]/g, '.gif" />');
			/*
			_html2 = _html1.replace(/&lt;/g, '<');
			_html3 = _html2.replace(/&gt;/g, '>'); */
			return _html1;
		} else {
			return str;
		}
	};

	//批量加载文件
	$.addFields = function(urls, callback) {
		var completeNum = 0;
		getField(urls[completeNum]);

		function getField(url) {
			$.ajax({
				dataType: "script",
				url: apiUrl + url,
				cache: true,
				success: function() {
					completeNum++;
					if (completeNum >= urls.length) {
						callback && callback();
					} else {
						getField(urls[completeNum]);
					}
				},
				error: function(data) {
					if (data.status == 200) {
						completeNum++;
						if (completeNum >= urls.length) {
							callback && callback();
						} else {
							getField(urls[completeNum]);
						}
					} else {
						//console.log(data.responseText);
					}
				}
			});
		}
	};

	$.webUpImg = function (picker, box, fnCallback) {
		var imgArr = [];
		// 初始化Web Uploader
		var uploader = WebUploader.create({
			// 选完文件后，是否自动上传。
			auto: true,
			// swf文件路径
			swf: '/plugins/webuploader/Uploader.swf',
			// 文件接收服务端。
			server: 'http://up.qiniu.com',
			// 选择文件的按钮。可选。
			// 内部根据当前运行是创建，可能是input元素，也可能是flash.
			pick: picker,
			// 只允许选择图片文件。
			accept: {
				title: 'Images',
				extensions: 'gif,jpg,jpeg,bmp,png',
				mimeTypes: 'image/jpg,image/jpeg,image/png'
			}
		});
		uploader.on('uploadStart', function(file) {
			// debugger;
			$.ajax({
					url: ctx + "/Image/uploadInit",
					type: 'POST',
					dataType: 'json',
					data: {
						type: "R",
						imgNum: 1
					}
				})
				.done(function(result) {
					if (result.success) {
						token = result.obj.upToken;
						key = result.obj.img;
						uploader.option('formData', {
							token: result.obj.upToken,
							key: result.obj.img,
							file: file
						});
						imgArr.push(result.obj.img);
						uploader.upload(file);
					} else {
						uploader.stop(file);
					}
				})
				.fail(function() {
					uploader.stop(file);
				});

		});
		// 当有文件添加进来的时候
		/*uploader.on('fileQueued', function(file) {
			var $li = $(
					'<div id="' + file.id + '" class="file-item thumbnail">' +
					'<img>' +
					'<div class="info">' + file.name + '</div>' +
					'</div>'
				),
				$img = $li.find('img');


			// $list为容器jQuery实例
			$(box).append($li);

			// 创建缩略图
			// 如果为非图片文件，可以不用调用此方法。
			// thumbnailWidth x thumbnailHeight 为 100 x 100
			uploader.makeThumb(file, function(error, src) {
				if (error) {
					$img.replaceWith('<span>不能预览</span>');
					return;
				}

				$img.attr('src', src);
			}, 100, 100);
		});*/
		// 文件上传过程中创建进度条实时显示。
		uploader.on('uploadProgress', function(file, percentage) {
			var $li = $('#' + file.id),
				$percent = $li.find('.progress span');

			// 避免重复创建
			if (!$percent.length) {
				$percent = $('<p class="progress"><span></span></p>')
					.appendTo($li)
					.find('span');
			}

			$percent.css('width', percentage * 100 + '%');
		});
		// 文件上传成功，给item添加成功class, 用样式标记上传成功。
		uploader.on('uploadSuccess', function(file) {
			$('#' + file.id).addClass('upload-state-done');
		});
		// 文件上传失败，显示上传出错。
		uploader.on('uploadError', function(file) {
			var $li = $('#' + file.id),
				$error = $li.find('div.error');

			// 避免重复创建
			if (!$error.length) {
				$error = $('<div class="error"></div>').appendTo($li);
			}

			$error.text('上传失败');
		});
		// 完成上传完了，成功或者失败，先删除进度条。
		uploader.on('uploadComplete', function(file) {
			$('#' + file.id).find('.progress').remove();
			if ($.isFunction(fnCallback)) {
				var retStr = JSON.stringify(imgArr);
				fnCallback(retStr);
				imgArr.length = 0;
			}
		});
		uploader.on('uploadFinished', function() {			
			/* Act on the event */
		});
	};

})(jQuery);

//业务逻辑
$(function() {
	initNav();

	function initNav() {
		function initNavHtml() {
			/*var html = $.tmpl($('#nav-tmpl').html(), {
				datalist: _data
			});
			$('.sidebar').html(html);
			var $headBox = $('#headAccountInfo');
			var $infos = $('.myInfo');
			$headBox.find('.hidden-xs').html($infos.html());
			$headBox.find('[filed="logintime"]').html($infos.attr('data-time'));
			$headBox.find('[filed="loginip"]').html($infos.attr('data-ip'));
			$headBox.find('[filed="depart"]').html($infos.attr('data-depart'));
			//modeLoad();
			var syusDepart=$('.myInfo').attr('data-depart');
			var syusUsername=$('.myInfo').html();
			console.log(syusDepart+syusUsername);*/

			var url = location.pathname;

			$(".sidebar-menu  a").each(function() {

				var alink = $(this), uri = $.trim(alink.attr('href'));
				console.log("url", url);
				console.log("uri", uri);
				console.log("url.slice(-uri.length)", url.slice(-uri.length));
				if (url == uri || url.slice(-uri.length) == uri) {


					$('head title').text(alink.html());

					caption = alink.html();

					collapsedIn = true;
					
					
					alink.closest('li').addClass('active');
					alink.closest('.treeview').addClass('active');
				}

			});
			/*
			return ;
			
			//解析url，载入内容页面
			var pageUrl = location.search;
			var pageNum = pageUrl.split('po=')[1];
			if(pageNum == null){return;}
			if (pageNum) {
				var defaultUrl = mode_position[pageNum];
				if (defaultUrl) {
					$.get(apiUrl + defaultUrl, function(data) {
						$('.content-wrapper').html(data);
					});
					var $thisA = $('.sidebar-menu a[data-type="' + pageNum + '"]');
					$('head title').text($thisA.text());
					$thisA.closest('li').addClass('active');
					$thisA.closest('.treeview').addClass('active');
				}
				$('.mode-lis').click(function() {
					if ($(this).attr('data-type') == pageNum) {
						return false;
					}
				});
			} else {
				$('.mode-lis').click(function() {
					$(this).removeAttr('target');
					var defaultUrl = mode_position[$(this).attr('data-type')];
					if (defaultUrl) {
						$.get(apiUrl + defaultUrl, function(data) {
							$('.content-wrapper').html(data);
						});
						var $thisA = $('.sidebar-menu a[data-type="' + pageNum + '"]');
						$('head title').text($thisA.text());
						$thisA.closest('li').addClass('active');
						$thisA.closest('.treeview').addClass('active');
					}
				});
			}*/
			
		}
		initNavHtml()
		/*$.post(apiUrl + '/Account/modList', function(data) {
			if (data.obj && data.obj.length) {
				var newData = [];
				data.obj.forEach(function(item, i) {
					if (!item.symoParentid) {
						newData.push(item);
					}
				});
				if (newData.length) {
					newData.forEach(function(item, i) {
						item.subnav = data.obj.filter(function(_item) {
							
							return _item.symoParentid == item.symoId;
							
						});

					});
				}
				var _data = {
					attributes: data.attributes,
					obj: newData
				};
				if ($('#nav-tmpl').length) {
					initNavHtml();
				} else {
					$.get(apiUrl + '/dist/js/nav_temp.html', function(temp) {
						$('body').append(temp);
						initNavHtml();
					});
				}

				
			} else {
				//alert('页面过期，请重新登录！');
				//location.replace('Account/loginOut');
			}
		}).fail(function() {
			console.log("error");
		});*/
	};

	function modeLoad() {
		var $lis = $('.mode-lis');
		$lis.click(function() {
			$(this).parent('li').siblings().removeClass('active');
			$(this).parent('li').addClass('active');
			var modeNum = $(this).attr('data-type');
			var loadUrl = mode_position[modeNum];
			if (loadUrl) {
				$.get(apiUrl + loadUrl, function(data) {
					$('.content-wrapper').html(data);
				});
			}
		});
	};

	$('#headAccountInfo').find('[field="pwdUpd"]').click(function() {
		/*$.get(apiUrl + '/view/account/pwdUpd.html', function(data) {
			$('.content-wrapper').html(data);
		});*/
		$.ajax({
			url: apiUrl + '/view/account/pwdUpd.html',
			dataType: "html",
			cache: false,
			success: function(data) {
				$('.content-wrapper').html(data);
			}
		});
	});
    //
	$.trim = function(str) {
		return str.replace(/(^\s*)|(\s*$)/g, '');
	};

	$.msg = function(str) {
		$("#commModalCon").html(str);
		$('#commModal').modal({
			keyboard: true
		});
	};
});

Date.prototype.format = function(f, utc) {
	var o = {
		"M+": (utc ? this.getUTCMonth() : this.getMonth()) + 1, //month
		"d+": utc ? this.getUTCDate() : this.getDate(), //day
		"h+": utc ? this.getUTCHours() : this.getHours(), //hour
		"m+": utc ? this.getUTCMinutes() : this.getMinutes(), //minute
		"s+": utc ? this.getUTCSeconds() : this.getSeconds(), //second
		"q+": Math.floor(((utc ? this.getUTCMonth() : this.getMonth()) + 3) / 3), //quarter
		"S": utc ? this.getUTCMilliseconds() : this.getMilliseconds() //millisecond
	}
	if (/(y+)/.test(f)) f = f.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(f)) f = f.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	return f
}

function firstDate(fmt) {
	if (fmt == null || fmt == undefined) {
		fmt = 'yyyy-MM-dd hh:mm:ss';
	}
	var date_ = new Date();
	var year = date_.getFullYear();
	var month = date_.getMonth();
	var day = new Date(year, month, 1);
	var str = day.format(fmt);
	//alert(str);
	return str;
}

function lastDate(fmt) {
	if (fmt == null || fmt == undefined) {
		fmt = 'yyyy-MM-dd hh:mm:ss';
	}
	var date_ = new Date();
	var year = date_.getFullYear();
	var month = date_.getMonth() + 1;
	var day = new Date(year, month, 0);
	day.setDate(day.getDate() + 1);
	//day.setSeconds(day.getSeconds()-1);
	var str = day.format(fmt);
	return str;
}

//获取昨天日期
function yesterdayDate(fmt) {
	if (fmt == null || fmt == undefined) {
		fmt = 'yyyy-MM-dd hh:mm:ss';
	}
	var dd = new Date();
	dd.setDate(dd.getDate() - 1); //获取AddDayCount天后的日期 
	/*var y = dd.getFullYear(); 
	var m = dd.getMonth()+1;//获取当前月份的日期 
	var d = dd.getDate(); */
	return dd.format(fmt);
}

/*前端字符串日期，转long型*/
function getDateFromStr(str) {
	var f = null;
	if (str == null || str == '') return f;
	var strTmp = str.replace(/-/g, "/");
	try {
		var tmpDate = new Date(strTmp);
		return tmpDate;
	} catch (e) {
		return f;
	}
}
function CheckPassWord(password) {//密码必须包含数字和字母
    var str = password;
    if (str == null || str.length < 8|| str.length > 20) {
        return false;
    }
    var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
    if (reg.test(str))
        return true;
}
