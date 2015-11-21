define(['handlebars'], function(Handlebars) { 
	
	/**
	 * handlebars自定义helper
	 */

	/**
	 * {{#compare people.name '==' 'peter'}}
	 *  他的名字是peter
	 *    {{else}}
	 *  他的名字不是peter
	 * {{/compare}}
	 */
	Handlebars.registerHelper('compare', function(left, operator, right, options) {
		if (arguments.length < 3) {
			throw new Error('Handlerbars Helper "compare" needs 2 parameters');
		}
		var operators = {
			'==': function(l, r) {
				return l == r;
			},
			'===': function(l, r) {
				return l === r;
			},
			'!=': function(l, r) {
				return l != r;
			},
			'!==': function(l, r) {
				return l !== r;
			},
			'<': function(l, r) {
				return l < r;
			},
			'>': function(l, r) {
				return l > r;
			},
			'<=': function(l, r) {
				return l <= r;
			},
			'>=': function(l, r) {
				return l >= r;
			},
			'typeof': function(l, r) {
				return typeof l == r;
			}
		};

		if (!operators[operator]) {
			throw new Error('Handlerbars Helper "compare" doesn\'t know the operator ' + operator);
		}

		var result = operators[operator](left, right);

		if (result) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});

	/**
	 * {{formatnumber num}}
	 */
	Handlebars.registerHelper('formatnumber', function(num, options) {
		num = num + '';
		return num.replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g, ',$1');
	});
	
	return Handlebars;
});