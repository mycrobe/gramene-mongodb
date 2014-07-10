db.genes.ensureIndex({"$**":"text"});
db.genes.ensureIndex({taxon_id:1});
db.genes.ensureIndex({"xrefs.GO":1});
db.genes.ensureIndex({"xrefs.PO":1});
db.genes.ensureIndex({"xrefs.TO":1});
db.genes.ensureIndex({"ancestors.GO":1});
db.genes.ensureIndex({"ancestors.PO":1});
db.genes.ensureIndex({"ancestors.TO":1});
db.genes.ensureIndex({"ancestors.taxon":1});
db.genes.ensureIndex({biotype:1});
db.genes.ensureIndex({taxon_id:1, seq_region:1, start:1});
