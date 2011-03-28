jQuery.fetch. Makes loading remote data in elements a breeze. Only 250 bytes minified.

Example
=======
HTML
----
    <div class="remote" data-href="some-remote-url.html"> </div>

JavaScript
----------
    $().ready(function() { 
        $('.remote').fetch(function() { alert('data is loaded'); });
    });

Note
====
The callback is stored with the element. Extra .fetch calls will execute the callback again *unless* you pass false or a new callback.
