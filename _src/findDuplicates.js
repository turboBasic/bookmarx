let otherBookmarks = $('[unfiled_bookmarks_folder]').nextElementSibling.getElementsByTagName('a')
let toolbarBookmarks = $('[personal_toolbar_folder]').parentNode.nextElementSibling.getElementsByTagName('a')

let tbHrefs = [...toolbarBookmarks].map(el => el.href)   // Array.prototype.map.call(toolbarBookmarks, el => el.href) 
let diff = [];

for (const otherItem of otherBookmarks) {
    let duplicate = tbHrefs.indexOf(otherItem.href)
    if (!duplicate) {
      continue;
    }

    console.log (`Found dublicate ${otherItem.href}`)
    let otherTags = (otherItem.attributes.getNamedItem('tags') || {} ).value 
    console.log ('   tags: ' + (otherTags || '<empty>'))
    let toolbarTags = (toolbarBookmarks[duplicate] || {}).attributes || {}
    if (typeof toolbarTags.getNamedItem == 'function') {  
        toolbarTags = (toolbarTags.getNamedItem('tags') || {}).value  
    } else {
      toolbarTags = null
    }
    if (otherTags != toolbarTags) {
      console.log ('   tags2: ' + (toolbarTags || '<empty>'))
      console.log ('   tags are not equal!')
      diff.push (`href: ${otherItem.href}, ${otherTags}, ${toolbarTags}`)
    }
}


/*

2017.09.11 :

"href: http://blog.rangle.io/angular-gulp-bestpractices/, DevOps,gulp,!-tmp-other-bookmarks, [object Object]
href: https://getpocket.com/a/read/1042868309, !-tmp-other-bookmarks, [object Object]
href: http://validator.w3.org/, css,testing,!-tmp-other-bookmarks, [object Object]
href: http://www.colourlovers.com/, colors,css,!-tmp-other-bookmarks, [object Object]
href: https://www.google.com.ua/search?q=laravel+homestead+on+windows&oq=laravel+homestead+on+windows&aqs=chrome..69i57j69i60.9466j0j7&sourceid=chrome&es_sm=93&ie=UTF-8, framework,laravel,php,Windows,!-tmp-other-bookmarks, [object Object]
href: https://www.google.com/webmasters/tools/home?hl=uk, !-toolbar-SEO,internet,marketing,seo,!-tmp-other-bookmarks, [object Object]
href: https://tagmanager.google.com/?hl=en#/home, !-toolbar-SEO,internet,marketing,seo,!-tmp-other-bookmarks, [object Object]
href: http://ru.learnlayout.com/box-sizing.html, css,layout,!-tmp-other-bookmarks, [object Object]
href: https://www.google.com.ua/#q=how+to+create+joomla+3+template+from+scratch, cms,joomla,php,!-tmp-other-bookmarks, [object Object]"

*/



/*

old:

"href: http://blog.rangle.io/angular-gulp-bestpractices/, DevOps,gulp, [object Object]
href: https://getpocket.com/a/read/1042868309, undefined, [object Object]
href: http://validator.w3.org/, css,testing, [object Object]
href: http://www.colourlovers.com/, colors,css, [object Object]
href: https://www.google.com.ua/search?q=laravel+homestead+on+windows&oq=laravel+homestead+on+windows&aqs=chrome..69i57j69i60.9466j0j7&sourceid=chrome&es_sm=93&ie=UTF-8, framework,laravel,php,windows, [object Object]
href: https://www.google.com/webmasters/tools/home?hl=uk, !-toolbar-SEO,internet,marketing,seo, [object Object]
href: https://tagmanager.google.com/?hl=en#/home, !-toolbar-SEO,internet,marketing,seo, [object Object]
href: http://ru.learnlayout.com/box-sizing.html, css,layout, [object Object]
href: https://www.google.com.ua/#q=how+to+create+joomla+3+template+from+scratch, cms,joomla,php, [object Object]
href: https://tb.rg-adguard.net/index.php, windows,Windows 10,!-best, [object Object]
href: https://ezgif.com/, image, [object Object]
href: http://www.oszone.net/5615/, windows,registry, [object Object]"

*/
