import ReleasePage from '../component/default-page';

const I8Release = () => {
  return (
    <ReleasePage
      version="5.1.30"
      iosAddress="itms-services://?action=download-manifest&url=https://www.qxy.world:9999/resource/mi8.plist"
      androidAddress="http://192.168.21.88:8080/resource/mi8.apk"
    />
  );
};

export default I8Release;
