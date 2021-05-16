function POST() {
  $.ajax({
    type: 'POST',
    url: 'http://192.168.0.101:8081/',
    data: decodeURI('<C>\n<A>ZZ</A>\n<B>ZZZ</B>\n</C>'),
    success: function(data) {
      const res = data;
      //xml解讀
      const xml = new XMLSerializer().serializeToString(res);
      //將API回復的內容放進TextAeraRESPONs內
      console.log(xml);
      alert(xml);
    },
    dataType: 'xml'
  });
}
