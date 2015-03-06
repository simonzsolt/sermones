$( document ).ready(function() {

    //  console.log('ready');

    $.ajax({
        url: "http://localhost/web/repo/sermones/erdy/html", // ez a html fájlok helye a szerveren
        success: function(data){
            // kiszűri a mappában lévő html fájlokat
            $(data).find("a:contains(.html)").each(function(){

                // ebbe az arraybe kerül az összes html fájl neve
                var htmlFiles = [];

                // az fNum az aktuális html fájl nevének ext. nélküli str-je 
                var fNum = ($(this).attr("href")).replace('.html', '');
                htmlFiles.push(fNum); // a számok az arraybe kerülnek

                // a linkPages fgv keresi meg a még be nem linkel oldalszámokat,
                // és megváltoztatja az outerHTLM értéket (nem véglelges!)
                function linkPages(element, index, array) {

                    $( 'tr td:nth-child(4)' ).each(function() {

                        var pageHref = '<b><a href="html/' + element + '.html" name="' +  element + '">' + element + '</a><a href="' + element + '.html"></a></b>';

                        $($(this)).find('b:contains("' + element + '")').prop('outerHTML', pageHref);
                                   
                    }); // each fgv a htmlFiles array léptetésére
                } htmlFiles.forEach(linkPages); // fgv indítása az számok tartaémazó arrayel

            }); // each data find
        } // succes ajax
    }); // ajax
}); // doc ready