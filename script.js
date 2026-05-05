(function () {
  async function imageToBase64(imageUrl) {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error('Could not load image: ' + imageUrl);
    }

    const blob = await response.blob();

    return new Promise(function (resolve, reject) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };

      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  document.getElementById('add-contact').addEventListener('click', async function () {
    try {
      const base64Image = await imageToBase64('pas_logo.png');

      const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        'PRODID:-//Apple Inc.//iPhone OS 26.3//EN',
        'N:;Professional Appliance Service;;;',
        'FN:Professional Appliance Service',
        'ORG:PAS;',
        'TITLE:Owner / Technician',
        'EMAIL;type=INTERNET;type=pref:professionalappliance@gmail.com',
        'TEL;type=WORK;type=VOICE;type=pref:2267599673',
        'item1.URL;type=pref:https://www.professionalapplianceserviceinc.com',
        'item1.X-ABLabel:_$!<HomePage>!$_',
        'item2.URL:https://book.housecallpro.com/book/Professional-Appliance-Service-Inc/a4058517936f41cea64677fbf1bdbda1?v2=true',
        'item2.X-ABLabel:Get An Estimate',
        'PHOTO;ENCODING=b;TYPE=PNG:' + base64Image,
        'END:VCARD'
      ].join('\r\n');

      const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'Professional-Appliance-Service.vcf';
      a.style.display = 'none';

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert('Unable to create contact card. Make sure pas_logo.png is in the same folder as this script/page.');
    }
  });
})();
