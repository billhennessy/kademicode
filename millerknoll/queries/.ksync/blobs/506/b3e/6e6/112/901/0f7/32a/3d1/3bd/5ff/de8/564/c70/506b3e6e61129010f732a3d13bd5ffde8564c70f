function handleKprs(page, params, kprs) {
    log.info("handleKprs > page {} params {} kprs {}", page, params, kprs);

    var jsonDB = page.find('/jsondb');
    var kprsDB = jsonDB.child('kprs');

    if (filesDB === null) {
        filesDB = jsonDB.createDb('kprs', 'KPR App', 'kprs');
    }

    if (kprs !== null || !kprs.isEmpty()) {
        var fileArray = kprs.entrySet().toArray();
        for (var i = 0; i < fileArray.length; i++) {
            var file = fileArray[i].getValue();

        }
    }
}