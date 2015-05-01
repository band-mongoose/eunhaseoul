/** @class wixapps.core.logics.page.AppBuilderPageLogic */
define.Class('wixapps.core.logics.page.AppBuilderPageLogic', function (classDefinition) {
    /** @type bootstrap.managers.classmanager.ClassDefinition */
    var def = classDefinition;

    def.inherits('wixapps.core.logics.page.PageLogicBase');

    /** @lends wixapps.core.logics.page.AppBuilderPageLogic */
    def.fields({

        _environment: null
    });

    /** @lends wixapps.core.logics.page.AppBuilderPageLogic */
    def.methods({
        initialize: function (environment) {
            this._environment = environment;
            this._type = environment.getForType();
        },

        paramsFromUri: function (itemId) {
            if (!itemId) {
                itemId = this._getSampleItemIdFromStore();
            }
            if (itemId) {
                return {
                    itemId: itemId
                };
            }
            return null;
        },

        _getSampleItemIdFromStore: function () {
            var dataProvider = this._environment.getAppInstance().getDataProviders().getWixDbDataProvider();
            var items = dataProvider.queryLocalStore(this._type, {}, {}, 0, 1);
            if (items && items.length) {
                return items[0].getChildValue("_iid");
            }
            return null;
        },

        fetchDataItem: function (params, onSuccess, onFailure) {
            var wixDbDataProvider = this._environment.getAppInstance().getDataProviders().getWixDbDataProvider();
            wixDbDataProvider.readItem(params.itemId, onSuccess, onFailure);
        },

        fetchSampleDataItem: function (onSuccess, onFailure) {
            var dataProvider = this._environment.getAppInstance().getDataProviders().getWixDbDataProvider();
            var items = dataProvider.queryLocalStore(this._type, {}, {}, 0, 1);
            if (!items || items.length === 0) {
                dataProvider.query(this._type, {}, {}, 0, 1, function (remoteItems) {
                    if (remoteItems && remoteItems.length > 0) {
                        onSuccess(remoteItems[0]);
                    }
                    else {
                        var appInstance = this._environment.getAppInstance();
                        var dataItemFactory = appInstance.getDataItemFactory();
                        var sampleDataItem = dataItemFactory.createDataItem({
                            _type: this._type,
                            _iid: "SampleData"
                        });

                        appInstance.getTypesManager().applyDefaults(sampleDataItem);

                        onSuccess(sampleDataItem);
                    }
                }.bind(this), onFailure);
            }
            else {
                onSuccess(items[0]);
            }
        }
    });
});
