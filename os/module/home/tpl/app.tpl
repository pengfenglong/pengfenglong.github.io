<div class="device">
	<div class="swiper-container" style="cursor: -webkit-grab;">
		<div class="swiper-wrapper">
			{{#each this}}
			<div class="swiper-slide">
				<div class="content-slide">
					{{#each this}}
					<a target="_bank" href="{{url}}">
						<div class="mbg">
							<p class="ico">
								<img src="module/home/image/{{icon}}">
							</p>
							<p class="title">{{name}}</p>
						</div>
					</a>
					{{/each}}
				</div>
			</div>
			{{/each}}
		</div>
	</div>
	<div class="pagination" style="-webkit-transform: translate3d(0, 0, 0)">
		<span class="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
	</div>
</div>


