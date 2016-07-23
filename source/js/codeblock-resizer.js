+function($) {
    'use strict';

    // Resize code blocks to fit the screen width

    var CodeBlockResizer = function(elem) {
        this.$codeBlocks = $(elem);
    };

    CodeBlockResizer.prototype = {
        /**
         * Run main feature
         */
        run: function() {
            var self = this;
            // resize all codeblocks
            self.resize();
            // resize codeblocks when window is resized
            $(window).smartresize(function() {
                self.resize();
            });
        },

        /**
         * Resize codeblocks
         */
        resize: function() {
            var self = this;
            self.$codeBlocks.each(function() {
                var thisWidth = $(this).width();
                //console.dir(this);
                //console.log('thisWidth: ' + thisWidth);
                var $gutter = $(this).find('.gutter');
                var $code = $(this).find('.code');
                // get padding of code div
                var codePaddings = $code.width() - $code.innerWidth();
                // code block div width with padding - gutter div with padding + code div padding
                var width = $(this).outerWidth() - $gutter.outerWidth() + codePaddings;
                var aa = thisWidth - $gutter.outerWidth() - codePaddings - 50;
                console.log('new width: ' + aa);
                // apply new width
                $code.css('width', aa);
                $code.children('pre').css('width', aa);
            });
        }
    };

    $(document).ready(function() {
        // register jQuery function to check if an element has an horizontal scroll bar
        $.fn.hasHorizontalScrollBar = function() {
            return this.get(0).scrollWidth > this.innerWidth();
        };
        //var resizer = new CodeBlockResizer('figure.highlight');
        //resizer.run();
    });
}(jQuery);
