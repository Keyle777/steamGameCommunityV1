// 启动抖动动画
function startShake(element) {
	element.classList.add('shaking');
	element.addEventListener(
		'animationiteration',
		() => {
			// 在动画循环迭代时移除抖动样式，以便重新触发
			element.classList.remove('shaking');
		},
		{ once: true }
	);
}

// 停止抖动动画
function stopShake(element) {
	// 移除抖动样式
	element.classList.remove('shaking');
}

// 导出函数，以便其他地方可以使用它们
export { startShake, stopShake };
