(function($) {
    // دالة KH_show_visitors
    function KH_show_visitors() {
        var $totalOnline = $('#KH_total-online');
        if ($totalOnline.length === 0) return false;

        var v = ($totalOnline.text().match(/\b\d+\b/g)[3] &&
                parseInt($totalOnline.text().match(/\b\d+\b/g)[3])) || 0;

        var visitors = '';
        if (v > 0) {
            for (var i = 1; i <= v; i++) {
                visitors += 'زائر ' + i;
                if (i < v) {
                    visitors += ', ';
                }
            }
        }

        var $usersOnline = $('#KH_users-online');
        if ($usersOnline.length > 0) {
            var originalContent = $usersOnline.html();
            var existingUsers = originalContent.split('الأعضاء المتواجدون في المنتدى: ')[1].split('عناكب محركات البحث المتواجدة حالياً في المنتدى:')[0].trim();
            var searchEngines = originalContent.split('عناكب محركات البحث المتواجدة حالياً في المنتدى: ')[1].trim();

            if (visitors.trim() !== '') {
                $usersOnline.html('الأعضاء المتواجدون في المنتدى: ' + existingUsers.replace(/<br>/g, ' ') + '، ' + visitors + '<br>' +
                'عناكب محركات البحث المتواجدة حالياً في المنتدى: ' + searchEngines);
            } else {
                $usersOnline.html('الأعضاء المتواجدون في المنتدى: ' + existingUsers.replace(/<br>/g, ' ') + '<br>' +
                'عناكب محركات البحث المتواجدة حالياً في المنتدى: ' + searchEngines);
            }
        }

        return 'ModernBB';
    }

    // تصدير الدالة للاستخدام في أماكن أخرى إذا لزم الأمر
    window.KH_show_visitors = KH_show_visitors;

})(jQuery);
