var wms_layers = [];

var format_surfacesAB_0 = new ol.format.GeoJSON();
var features_surfacesAB_0 = format_surfacesAB_0.readFeatures(json_surfacesAB_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surfacesAB_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surfacesAB_0.addFeatures(features_surfacesAB_0);
var lyr_surfacesAB_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_surfacesAB_0, 
                style: style_surfacesAB_0,
                interactive: true,
                title: '<img src="styles/legend/surfacesAB_0.png" /> surfacesAB'
            });

lyr_surfacesAB_0.setVisible(true);
var layersList = [lyr_surfacesAB_0];
lyr_surfacesAB_0.set('fieldAliases', {'ID': 'ID', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'X_DEP': 'X_DEP', 'Y_DEP': 'Y_DEP', 'nom_dep_1': 'nom_dep_1', 'gc': 'gc', 'surf_fou': 'surf_fou', 'vigne': 'vigne', 'fruits': 'fruits', 'legumes': 'legumes', 'ppam': 'ppam', 'autres': 'autres', 'ensemble': 'ensemble', 'sau tot': 'sau tot', 'pourc_bio': 'pourc_bio', 'racine': 'racine', 'rac2': 'rac2', });
lyr_surfacesAB_0.set('fieldImages', {'ID': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'X_DEP': 'TextEdit', 'Y_DEP': 'TextEdit', 'nom_dep_1': 'TextEdit', 'gc': 'TextEdit', 'surf_fou': 'TextEdit', 'vigne': 'TextEdit', 'fruits': 'TextEdit', 'legumes': 'TextEdit', 'ppam': 'TextEdit', 'autres': 'TextEdit', 'ensemble': 'TextEdit', 'sau tot': 'TextEdit', 'pourc_bio': 'TextEdit', 'racine': 'TextEdit', 'rac2': 'TextEdit', });
lyr_surfacesAB_0.set('fieldLabels', {'ID': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'X_DEP': 'no label', 'Y_DEP': 'no label', 'nom_dep_1': 'no label', 'gc': 'no label', 'surf_fou': 'no label', 'vigne': 'no label', 'fruits': 'no label', 'legumes': 'no label', 'ppam': 'no label', 'autres': 'no label', 'ensemble': 'no label', 'sau tot': 'no label', 'pourc_bio': 'no label', 'racine': 'no label', 'rac2': 'no label', });
lyr_surfacesAB_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});