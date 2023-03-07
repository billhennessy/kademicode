(function($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['staffPoints'] = {
        init: function(contentArea, container, component, keditor) {

        },
        settingEnabled: true,
        settingTitle: 'Staff Points Gifting',
        initSettingForm: function(form, keditor) {
            flog('initSettingForm "staffPoints" component');

            var self = this;

            return $.ajax({
                url: '_components/staffPoints?settings',
                type: 'get',
                dataType: 'HTML',
                success: function(resp) {
                    form.html(resp);

                    form.find('.select-buckets').on('change', function() {
                        var component = keditor.getSettingComponent();
                        var dynamicElement = component.find('[data-dynamic-href]');

                        component.attr('data-bucket', this.value);
                        keditor.initDynamicContent(dynamicElement);
                    });
                }
            });
        },
        showSettingForm: function(form, component, keditor) {
            flog('showSettingForm "staffPoints" component');
            var self = this;
            var dataAttributes = keditor.getDataAttributes(component, ['data-type'], false);
            form.find('.select-bucket1').val(dataAttributes['data-bucket']);
            form.find('.select-bucket2').val(dataAttributes['data-bucket']);
        }
    }
})(jQuery);