// QQ表情插件
(function($) {
	var aEmoji = ['[Smile]','[Grimace]','[Drooling]','[Scowl]','[Chill]','[Sob]','[Shy]','[Silence]','[Sleep]','[Cry]','[Embarrassed]','[On fire]','[Wink]','[Grin]','[Surprised]','[Sad]','[Cool]','[Frightened]','[Scream]','[Puke]','[Chuckle]','[Lovely]','[Sneer]','[Arrogant]','[Hungry]','[Drowsy]','[Panic]','[Sweating]','[Laugh]','[Soldier]','[strive]','[Scold]','[Confused]','[Shhh]','[Hypnotized]','[Torment]','[Frustrated]','[Skull]','[Hammer]','[Wave/Bye]','[Relived/Wipe]','[Pick nose]','[Applause]','[Flushed]','[Hellooo]','[Snub1]','[Snub2]','[Yawn]','[Booo]','[Distressed]','[Sniffle]','[Sly]','[Pucker]','[Scared]','[Pathetic]','[Cleaver]','[Water Melon]','[Beer]','[Basketball]','[Ping Pong]','[Coffee]','[Rice]','[Pig]','[Rose]','[Fade]','[Kisses]','[Heart]','[Broken Heart]','[Cake]','[Lightning]','[Bomb]','[Dagger]','[Football]','[Ladybug]','[Shit]','[Moon]','[Sun]','[Gift]','[Hug]','[Strong]','[Weak]','[Shake]','[Victory]','[Admire]','[Beckon]','[Fist]','[Pinky]','[ILoveU]','[NO]','[OK]'];

	$.fn.qqFace = function(options) {
		var defaults = {
			id: 'facebox',
			path: 'face/',
			assign: 'content',
			tip: 'em_'
		};
		var option = $.extend(defaults, options);
		var assign = $('#' + option.assign);
		var id = option.id;
		var path = option.path;
		var tip = option.tip;

		if (assign.length <= 0) {
			alert('缺少表情赋值对象。');
			return false;
		}

		$(this).click(function(e) {
			var strFace, labFace;
			if ($('#' + id).length <= 0) {
				strFace = '<div id="' + id + '" class="qqFace">' +
					'<table cellspacing="0" cellpadding="0"><tr>';
				var m = 0;
				for (var i = 0; i <= 104; i++) {
					m++;
					labFace = '[' + tip + i + ']';
					strFace += '<td><img src="' + path + i + '.gif" onclick="$(\'#' + option.assign + '\').setCaret();$(\'#' + option.assign + '\').insertAtCaret(\'' + aEmoji[i] + '\');" /></td>';
					if (m % 15 == 0) strFace += '</tr><tr>';
				}
				strFace += '</tr></table><i class="qqFaceTriangle"></i></div>';
			}
			$(this).parent().append(strFace);
			/*			var offset = $(this).position();
						var top = offset.top + $(this).outerHeight();
						$('#'+id).css('top',top);
						$('#'+id).css('left',offset.left);*/
			$('#' + id).show();
			e.stopPropagation();
		});

		$(document).click(function() {
			$('#' + id).hide();
			$('#' + id).remove();
		});
	};

	$.fn.uploadImg = function(options, callback) {
		var BASE_URL = '..';
		var option = options || {};
		var isUp = true,

			$wrap = $('#uploader'),

			// 图片容器
			$queue = $('<ul class="filelist"></ul>').appendTo($wrap.find('.queueList')),

			// 状态栏，包括进度和控制按钮
			$statusBar = $wrap.find('.statusBar'),

			// 文件总体选择信息。
			$info = $wrap.find('.info'),

			// 上传按钮
			$upload = $wrap.find('.uploadBtn'),

			// 没选择文件之前的内容。
			$placeHolder = $wrap.find('.placeholder'),

			// 总体进度条
			$progress = $statusBar.find('.progress').hide(),

			// 添加的文件数量
			fileCount = 0,

			//剩余上传的数量
			fileSurplus = option.num || 9,

			// 添加的文件总大小
			fileSize = 0,

			// 优化retina, 在retina下这个值是2
			ratio = window.devicePixelRatio || 1,

			// 缩略图大小
			thumbnailWidth = 78 * ratio,
			thumbnailHeight = 78 * ratio,

			// 可能有pedding, ready, uploading, confirm, done.
			state = 'pedding',

			// 所有文件的进度信息，key为file id
			percentages = {},
			token, key,

			supportTransition = (function() {
				var s = document.createElement('p').style,
					r = 'transition' in s ||
					'WebkitTransition' in s ||
					'MozTransition' in s ||
					'msTransition' in s ||
					'OTransition' in s;
				s = null;
				return r;
			})(),

			// WebUploader实例
			uploader;

		if (!WebUploader.Uploader.support()) {
			alert('Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
			throw new Error('WebUploader does not support the browser you are using.');
		}
		if (uploader) {
			uploader.destroy();
		}
		// 实例化
		uploader = WebUploader.create({
			auto: false,
			pick: {
				id: '#filePicker',
				label: ''
			},
			dnd: '#uploader .queueList',
			paste: document.body,
			thumb: {
				quality: 100
			},
			accept: {
				title: 'Images',
				extensions: 'gif,jpg,jpeg,bmp,png',
				mimeTypes: 'image/*'
			},

			// swf文件路径
			swf: 'Uploader.swf',

			disableGlobalDnd: true,

			chunked: true,
			server: 'http://up.qiniu.com/',
			fileNumLimit: 9,
			fileSizeLimit: 50 * 1024 * 1024, // 
			fileSingleSizeLimit: 5 * 1024 * 1024 // 5 M
		});

		// 添加“添加文件”的按钮，
		uploader.addButton({
			id: '#filePicker2',
			label: '继续添加'
		});

		// 当有文件添加进来时执行，负责view的创建
		function addFile(file) {
			if ($queue.find("li").size() >= fileSurplus) {
				$("#filePicker2").hide();
			} else {
				$("#filePicker2").show();
			}
			var $li = $('<li id="' + file.id + '">' +
					'<p class="title">' + file.name + '</p>' +
					'<p class="imgWrap"></p>' +
					'<p class="progress"><span></span></p>' +
					'</li>'),

				$btns = $('<div class="file-panel">' +
					'<span class="cancel">删除</span>').appendTo($li),
				$prgress = $li.find('p.progress span'),
				$wrap = $li.find('p.imgWrap'),
				$info = $('<p class="error"></p>'),

				showError = function(code) {
					switch (code) {
						case 'exceed_size':
							text = '文件过大，超出限制！';
							break;

						case 'interrupt':
							text = '暂停上传';
							break;

						default:
							text = '上传失败';
							break;
					}

					$info.text(text).appendTo($li);
				};

			if (file.getStatus() === 'invalid') {
				showError(file.statusText);
			} else {
				// @todo lazyload
				$wrap.text('预览中');
				uploader.makeThumb(file, function(error, src) {
					if (error) {
						$wrap.text('不能预览');
						return;
					}

					var img = $('<img src="' + src + '">');
					$wrap.empty().append(img);
				}, thumbnailWidth, thumbnailHeight);

				percentages[file.id] = [file.size, 0];
				file.rotation = 0;
			}

			file.on('statuschange', function(cur, prev) {
				if (prev === 'progress') {
					$prgress.hide().width(0);
				} else if (prev === 'queued') {
					$li.off('mouseenter mouseleave');
					$btns.remove();
				}

				// 成功
				if (cur === 'error' || cur === 'invalid') {
					// console.log( file.statusText );
					showError(file.statusText);
					percentages[file.id][1] = 1;
				} else if (cur === 'interrupt') {
					showError('interrupt');
				} else if (cur === 'queued') {
					percentages[file.id][1] = 0;
				} else if (cur === 'progress') {
					$info.remove();
					$prgress.css('display', 'block');
				} else if (cur === 'complete') {
					$li.append('<span class="success"></span>');
				}

				$li.removeClass('state-' + prev).addClass('state-' + cur);
			});

			$li.on('mouseenter', function() {
				$btns.stop().animate({
					height: 87
				});
			});

			$li.on('mouseleave', function() {
				$btns.stop().animate({
					height: 0
				});
			});

			$btns.on('click', 'span', function() {
				var index = $(this).index(),
					deg;

				switch (index) {
					case 0:
						uploader.removeFile(file);
						return;

					case 1:
						file.rotation += 90;
						break;

					case 2:
						file.rotation -= 90;
						break;
				}

				if (supportTransition) {
					deg = 'rotate(' + file.rotation + 'deg)';
					$wrap.css({
						'-webkit-transform': deg,
						'-mos-transform': deg,
						'-o-transform': deg,
						'transform': deg
					});
				} else {
					$wrap.css('filter', 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + (~~((file.rotation / 90) % 4 + 4) % 4) + ')');
					// use jquery animate to rotation
					// $({
					//     rotation: rotation
					// }).animate({
					//     rotation: file.rotation
					// }, {
					//     easing: 'linear',
					//     step: function( now ) {
					//         now = now * Math.PI / 180;

					//         var cos = Math.cos( now ),
					//             sin = Math.sin( now );

					//         $wrap.css( 'filter', "progid:DXImageTransform.Microsoft.Matrix(M11=" + cos + ",M12=" + (-sin) + ",M21=" + sin + ",M22=" + cos + ",SizingMethod='auto expand')");
					//     }
					// });
				}


			});

			$li.appendTo($queue);
			// console.log( file);
			// console.log( percentages);

		}

		// 负责view的销毁
		function removeFile(file) {
			var $li = $('#' + file.id);
			delete percentages[file.id];
			updateTotalProgress();
			$li.off().find('.file-panel').off().end().remove();
			if ($queue.find("li").size() > 8) {
				$("#filePicker2").hide();
			} else {
				$("#filePicker2").show();
				$("#filePicker").hide();
			}
		}

		function updateTotalProgress() {
			var loaded = 0,
				total = 0,
				spans = $progress.children(),
				percent;

			$.each(percentages, function(k, v) {
				total += v[0];
				loaded += v[0] * v[1];
			});

			percent = total ? loaded / total : 0;

			spans.eq(0).text(Math.round(percent * 100) + '%');
			spans.eq(1).css('width', Math.round(percent * 100) + '%');
			updateStatus();
		}

		function updateStatus() {
			var text = '',
				stats;

			if (state === 'ready') {
				text = '共' + fileCount + '张，还能上传' + fileSurplus + '张。';
			} else if (state === 'confirm') {
				stats = uploader.getStats();
				if (stats.uploadFailNum) {
					text = '已成功上传' + stats.successNum + '张照片至相册，' + stats.uploadFailNum + '张照片上传失败。 ' +
						'<a class="retry c-2d57a1 curPor mr10" href="#"> ' + '重新上传' + '</a>' + '或' + '<a class="ignore c-2d57a1 curPor ml10" href="#">' + '忽略' + '</a>';
					layer.closeAll('loading');
				}			
			} else {
				stats = uploader.getStats();
				text = '共' + fileCount + '张，还能上传' + fileSurplus + '张。';

			}

			$info.html(text);
		}

		function setState(val) {
			var file, stats;

			if (val === state) {
				return;
			}

			$upload.removeClass('state-' + state);
			$upload.addClass('state-' + val);
			state = val;

			switch (state) {
				case 'pedding':
					$placeHolder.removeClass('element-invisible');
					$queue.parent().removeClass('filled');
					$queue.hide();
					$statusBar.addClass('element-invisible');
					uploader.refresh();
					break;

				case 'ready':
					$placeHolder.addClass('element-invisible');
					$('#filePicker2').removeClass('element-invisible');
					$queue.parent().addClass('filled');
					$queue.show();
					$statusBar.removeClass('element-invisible');
					uploader.refresh();
					break;

				case 'uploading':
					$('#filePicker2').addClass('element-invisible');
					$progress.show();
					$upload.text('暂停上传');
					var loadIndex = layer.load(0, {
						shade: 0.1
					});
					break;

				case 'paused':
					$progress.show();
					$upload.text('继续上传');
					break;

				case 'confirm':
					$progress.hide();
					$upload.text('开始上传').addClass('disabled');

					stats = uploader.getStats();
					if (stats.successNum && !stats.uploadFailNum) {
						setState('finish');
						return;
					}
					break;
				case 'finish':
					stats = uploader.getStats();
					if (stats.successNum) {
						layer.msg('上传成功');
						layer.closeAll('loading');
						if (callback) {
							callback();
						}
					} else {
						// 没有成功的图片，重设
						state = 'done';
						location.reload();
					}
					break;
			}

			updateStatus();
		}

		uploader.onUploadProgress = function(file, percentage) {
			var $li = $('#' + file.id),
				$percent = $li.find('.progress span');

			$percent.css('width', percentage * 100 + '%');
			percentages[file.id][1] = percentage;
			updateTotalProgress();
		};

		uploader.onFileQueued = function(file) {
			fileCount++;
			fileSurplus--;
			fileSize += file.size;

			if (fileCount === 1) {
				$placeHolder.addClass('element-invisible');
				$statusBar.show();
				$("#filePicker2").show();
			}

			addFile(file);

			setState('ready');
			updateTotalProgress();

		};

		var index = 0;
		uploader.on('uploadBeforeSend', function(block, data) {
			// console.log('as:' +block)
			var keyArrs = $("#upLoad_box").attr("data-key");
			key = keyArrs.indexOf(',') != -1 ? keyArrs.split(",") : [keyArrs];
			token = $("#upLoad_box").attr("data-upToken");
			data.key = key[index];
			data.token = token;
			index++;
		});

		uploader.on('uploadAccept', function(block, data) {

		});
		uploader.onFileDequeued = function(file) {
			fileCount--;
			fileSurplus++;
			fileSize -= file.size;

			if (!fileCount) {
				setState('pedding');
			}

			removeFile(file);
			updateTotalProgress();

		};

		uploader.on('all', function(type) {
			var stats;
			switch (type) {
				case 'uploadFinished':
					setState('confirm');
					break;

				case 'startUpload':
					key = $("#upLoad_box").attr("data-key");
					token = $("#upLoad_box").attr("data-upToken");
					setState('uploading');
					break;

				case 'stopUpload':
					setState('paused');
					break;

			}
		});

		uploader.onError = function(code) {
			//console.log('Eroor: ' + code);
			layer.closeAll('loading');
			if (code == "Q_EXCEED_NUM_LIMIT") {
				layer.msg('最多可以上传9张图片！');
			}
			if (code == "F_DUPLICATE") {
				layer.msg('文件重复上传！');
			}
			if (code == "F_EXCEED_SIZE") {
				layer.msg('文件过大，超出限制！');
			}
			if (code == "Q_TYPE_DENIED") {
				layer.msg('文件类型不支持！');
			}
		};

		$upload.on('click', function() {
			if ($(this).hasClass('disabled')) {
				return false;
			}

			if (state === 'ready') {
				uploader.upload();
			} else if (state === 'paused') {
				uploader.upload();
			} else if (state === 'uploading') {
				uploader.stop();
			}
		});

		$info.on('click', '.retry', function() {
			uploader.retry();
		});

		$info.on('click', '.ignore', function() {
			layer.msg('todo');
		});

		$upload.addClass('state-' + state);
		updateTotalProgress();
	};

})(jQuery);

jQuery.extend({
	unselectContents: function() {
		if (window.getSelection)
			window.getSelection().removeAllRanges();
		else if (document.selection)
			document.selection.empty();
	}
});
jQuery.fn.extend({
	selectContents: function() {
		$(this).each(function(i) {
			var node = this;
			var selection, range, doc, win;
			if ((doc = node.ownerDocument) && (win = doc.defaultView) && typeof win.getSelection != 'undefined' && typeof doc.createRange != 'undefined' && (selection = window.getSelection()) && typeof selection.removeAllRanges != 'undefined') {
				range = doc.createRange();
				range.selectNode(node);
				if (i == 0) {
					selection.removeAllRanges();
				}
				selection.addRange(range);
			} else if (document.body && typeof document.body.createTextRange != 'undefined' && (range = document.body.createTextRange())) {
				range.moveToElementText(node);
				range.select();
			}
		});
	},

	setCaret: function() { // !!window.ActiveXObject || "ActiveXObject" in window     
		if (!(!!window.ActiveXObject || "ActiveXObject" in window)) return;
		var initSetCaret = function() {
			var textObj = $(this).get(0);
			textObj.caretPos = document.selection.createRange().duplicate();
		};
		$(this).click(initSetCaret).select(initSetCaret).keyup(initSetCaret);
	},

	insertAtCaret: function(textFeildValue) {
		var textObj = $(this).get(0);
		if (document.all && textObj.createTextRange && textObj.caretPos) {
			$(textObj).focus();
			var caretPos = textObj.caretPos;
			caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == '' ?
				textFeildValue + '' : textFeildValue;
		} else if (textObj.setSelectionRange) {
			$(textObj).focus();
			var rangeStart = textObj.selectionStart;
			var rangeEnd = textObj.selectionEnd;
			var tempStr1 = textObj.value.substring(0, rangeStart);
			var tempStr2 = textObj.value.substring(rangeEnd);
			textObj.value = tempStr1 + textFeildValue + tempStr2;
			var len = textFeildValue.length;
			textObj.setSelectionRange(rangeStart + len, rangeStart + len);
			$(textObj).blur();
			$(textObj).keyup();
		} else {
			$(textObj).focus();
			textObj.value += textFeildValue;
		}
	}
});