<section class="mod-content error">
	<div class="mod-app-container">
		<ul class="mod-app-list" data-via="YYBH5.STORE.APP.CATEGORY.TENCENT">
			{{#each apps}}
			<li data-url="{{url}}" data-appid="">
				<div class="icon-app">
					<img data-src="" style="width: 48px; height: 48px;" src="module/home/image/{{icon}}">
				</div>
				<div class="app-content">
					<h3>{{name}}</h3>
					<div class="icon-star-list clearfix">
						<span><span style="width: 90%"></span></span>
					</div>
					<p class="c-tx1">160万人使用<span>|</span>4.3M</p>
				</div>
				{{#if has}}
				<a class="btn-gray" href="javascript:void(0);" data-code="{{code}}">删除</a>
				{{else}}
				<a class="btn-green" href="javascript:void(0);" data-code="{{code}}">添加</a>
				{{/if}}
			</li>
			{{/each}}
		</ul>
	</div>
</section>
