# addComma
A jQuery Plugin for Convert Numbers to number_format (1000 -> 1,000)
Installation
To install copy the addComma.min.js file into your project and add the following snippet to the header:
<pre>
&lt;script src="http://code.jquery.com/jquery-1.12.4.min.js"&gt;&lt;/script&gt;
&lt;script src="addComma.min.js"&gt;&lt;/script&gt;
<pre>
and Call <code>addComma()</code> 
For example:
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta content="text/html; charset=utf-8" http-equiv="Content-Type"&gt;
&lt;title&gt;Add Comma&lt;/title&gt;
&lt;script src="http://code.jquery.com/jquery-1.12.4.min.js"&gt;&lt;/script&gt;
&lt;script src="addComma.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;input&gt;
&lt;script&gt;
jQuery(document).ready(function() {
$('input').addComma();
})
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
also read the <a href="example.html">example.html</a>
