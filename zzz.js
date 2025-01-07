    /***
            * Application: Tags Search
            * Description: This application can displays tags for searching.
            * Version: 1.09032014-jq1.9.1 - Thoth (Ermoْpoli -> Eshmunen)
            * Made and Optimizations by JScript - 2014/03/09
            * View more in: http://*censored*
            * Copyright (c) 2013 JScript <jscriptbrasil at live dot com>
            * This work is free. You can redistribute it and/or modify it
            * under the terms of the WTFPL, Version 2
            */
            jQuery(function () {
                /***
                * User Definition Variables
                ***/
                /* ضع هنا الحد من طول الوسم!!! */
                var iTagLength = 4;
                /* ضع هنا اسم علامه الاداة!!! */
                var sTagTitle = 'الكلمات الدليلة:';
                /* عند مرور الماوس تظهر كلمه الاتيه!!! */
                var sTagToolTip = 'البحث عن المزيد من هذه الكلمة';
                /* END */
                /***
                * System Defined Variables - Do not edit if you don't know!
                ***/
                var oConfig = {
                    sInfo:
                        '<!--' +
                        '* Application: Tags Search' +
                        '* Description: This application can displays tags for searching.' +
                        '* Version: 1.09032014-jq1.9.1 - Thoth (Ermoْpoli -> Eshmunen)' +
                        '* Made and Optimizations by JScript - 2014/03/09' +
                        '* View more in: http://*censored*/forum & http://ajuda.forumeiros.com' +
                        '* Copyright (c) 2013 JScript <jscriptbrasil at live dot com>' +
                        '* This work is free. You can redistribute it and/or modify it' +
                        '* under the terms of the WTFPL, Version 2' +
                        '-->',
                    sContent:
                        '<span id="tags_search"><span>' + sTagTitle + ' </span></span>',
                    sCSS:
                        '<style>' +
                        '#tags_search {' +
                            'display: block;' +
                            'margin-bottom: 20px;' +
                            'margin-top: 20px;' +
                        '}' +
                        '.ipsTag {' +
                            'background: url("https://i.servimg.com/u/f55/18/17/62/92/tag_bg10.png") repeat scroll 0 0 rgba(0, 0, 0, 0);' +
                            'border-radius: 0 3px 3px 0;' +
                            'color: #FFFFFF !important;' +
                            'display: inline-block;' +
                            'font-size: 11px;' +
                            'height: 20px;' +
                            'line-height: 20px;' +
                            'margin: 5px 5px 0 0;' +
                            'padding: 0 7px 0 15px;' +
                            'text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.4);' +
                        '}' +
                        '</style>',
                    sTarget: ''
                };
     
                jQuery(oConfig.sCSS).insertBefore('body');
                /* Forum versions! */
                var phpBB2 = jQuery('.bodyline');
                var phpBB3 = jQuery('#wrap');
                var punbb = jQuery('#pun-intro');
     
                if (phpBB2.length) {
                    $('td.nav').parent().parent().parent().before(oConfig.sInfo + oConfig.sContent);
                    oConfig.sTarget = 'h1.cattitle:first';
                } else if(phpBB3.length) {
                    $('.topic-actions:first').before(oConfig.sInfo + oConfig.sContent);
                    oConfig.sTarget = '.post-header a';
                } else if(punbb.length) {
                    $('#main-content .main.paged').before(oConfig.sInfo + oConfig.sContent);
                    oConfig.sTarget = 'p.crumbs strong:last';
                } else if(invision.length) {
                    $('#main-content .borderwrap:first').before(oConfig.sInfo + oConfig.sContent);
                    oConfig.sTarget = 'div.maintitle.floated h3';
                };
                var tags = jQuery(oConfig.sTarget).text().split(' ');
                jQuery.each(tags, function(index, data) {
                    if(data.length > iTagLength) {
                        $('#tags_search').append(
                            '<a id="tag_search_' + index + '" class="ipsTag" title="' + sTagToolTip + ' ' + data + '" href="/search?search_keywords=' + data + '">' +
                            '    <span>' + data + '</span>' +
                            '</a>'
                        );
                    }
                });
            });
