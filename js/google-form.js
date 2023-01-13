!function(exports) {
  exports.submitGoogleForm = submitGoogleForm;

  function submitGoogleForm(form) {
    try {
      let data = [].slice.call(form).map(function(control) {
        return 'value' in control && control.name ?
          control.name + '=' + (control.value === undefined ? '' : encodeURIComponent(control.value)) :
          '';
      }).join('&');

      const xhr = new XMLHttpRequest();

      xhr.open('POST', form.action + '/formResponse', true);
      xhr.setRequestHeader('Accept',
          'application/xml, text/xml, */*; q=0.01');
      xhr.setRequestHeader('Content-type',
          'application/x-www-form-urlencoded; charset=UTF-16');
      xhr.send(data);
    } catch(e) {}

    form.parentNode.className += ' submitted';
    

    return false;
  }
}(typeof module === 'undefined' ? window : module.exports);
