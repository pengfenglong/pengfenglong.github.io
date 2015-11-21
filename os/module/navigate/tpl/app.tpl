<div class="top_bar" style="-webkit-transform: translate3d(0, 0, 0)">
	<nav>
		<ul id="top_menu" class="top_menu">
			{{#each navigations}} 
			{{#compare code '==' 'home'}}
			<li class="home">
				<a class="navigation_a" code="home"></a>
			</li>
			{{else}}
			<li class="navigation_a">
				<a class="navigation_a" code="{{code}}">
					<img src="module/navigate/image/{{icon}}" />
					<label>{{name}}</label>
				</a>
				<ul class="menu_font" style="display: none">
					{{#each children}}
					<li>
						<a href="{{url}}">
							<img src="{{icon}}" />
							<label>{{name}}</label>
						</a>
					</li>
					{{/each}}
				</ul>
			</li>
			{{/compare}} 
			{{/each}}
		</ul>
	</nav>
</div>
<div id="plug-wrap" onclick="closeall()" style="display: none;"></div>
