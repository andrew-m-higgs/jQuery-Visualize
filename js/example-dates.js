// Run the script on DOM ready:
$(function(){
	//filtered chart
 	$('table')
 		.visualize({
	 		type: 'area',
	 		rotateX: 'true'
	 	})
	 	.before("<h2>B) Dates rotated - will require some changes to css to padding</h2><pre><code>$('table').visualize({type: 'area'', <strong>rotateX: 'true'</strong>});</code></pre>");
 	
 	$('table')
 		.visualize({
      type: 'area'
     })
 		.before("<h2>A) Dates not rotated (<em>sometimes they overlap</em>)</h2><pre><code>$('table').visualize({type: 'area'});</code></pre>")
});
