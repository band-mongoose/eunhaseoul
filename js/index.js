$(document).ready(function () {
  $("#WIX_ADS").hide();
  $(".wixAds").hide();
});
// BEAT MESSAGE
try {
  window.wixBiSession = {
    initialTimestamp: Date.now(),
    viewerSessionId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      }
    )
  };
  (new Image()).src = 'http://frog.wix.com/bt?src=29&evid=3&pn=1&et=1&v=3.0&vsi=' + wixBiSession.viewerSessionId +
    '&url=' + encodeURIComponent(location.href.replace(/^http(s)?:\/\/(www\.)?/, '')) +
    '&isp=0&st=2&ts=0&c=' + wixBiSession.initialTimestamp;
} catch (e) {
}
// BEAT MESSAGE END
var serviceTopology = {
  "serverName": "app26.aus",
  "cacheKillerVersion": "1",
  "staticServerUrl": "http://static.parastorage.com/",
  "usersScriptsRoot": "http://static.parastorage.com/services/wix-users/2.487.0",
  "biServerUrl": "http://frog.wix.com/",
  "userServerUrl": "http://users.wix.com/",
  "billingServerUrl": "http://premium.wix.com/",
  "mediaRootUrl": "http://static.wixstatic.com/",
  "logServerUrl": "http://frog.wix.com/plebs",
  "monitoringServerUrl": "http://TODO/",
  "usersClientApiUrl": "https://users.wix.com/wix-users",
  "publicStaticBaseUri": "http://static.parastorage.com/services/wix-public/1.160.0",
  "basePublicUrl": "http://www.wix.com/",
  "postLoginUrl": "http://www.wix.com/my-account",
  "postSignUpUrl": "http://www.wix.com/new/account",
  "baseDomain": "wix.com",
  "staticMediaUrl": "http://static.wixstatic.com/media",
  "staticAudioUrl": "http://storage.googleapis.com/static.wixstatic.com/mp3",
  "emailServer": "http://assets.wix.com/common-services/notification/invoke",
  "blobUrl": "http://static.parastorage.com/wix_blob",
  "htmlEditorUrl": "http://editor.wix.com/html",
  "siteMembersUrl": "https://users.wix.com/wix-sm",
  "scriptsLocationMap": {
    "wixapps": "http://static.parastorage.com/services/wixapps/2.461.3",
    "tpa": "http://static.parastorage.com/services/tpa/2.1027.0",
    "santa-resources": "http://static.parastorage.com/services/santa-resources/1.0.0",
    "bootstrap": "http://static.parastorage.com/services/bootstrap/2.1144.37",
    "ck-editor": "http://static.parastorage.com/services/ck-editor/1.87.2",
    "it": "http://static.parastorage.com/services/experiments/it/1.37.0",
    "skins": "http://static.parastorage.com/services/skins/2.1144.37",
    "core": "http://static.parastorage.com/services/core/2.1144.37",
    "sitemembers": "http://static.parastorage.com/services/sm-js-sdk/1.31.0",
    "automation": "http://static.parastorage.com/services/automation/1.23.0",
    "web": "http://static.parastorage.com/services/web/2.1144.37",
    "ecommerce": "http://static.parastorage.com/services/ecommerce/1.190.0",
    "hotfixes": "http://static.parastorage.com/services/experiments/hotfixes/1.15.0",
    "langs": "http://static.parastorage.com/services/langs/2.541.0",
    "santa-versions": "http://static.parastorage.com/services/santa-versions/1.248.0",
    "ut": "http://static.parastorage.com/services/experiments/ut/1.2.0"
  },
  "developerMode": false,
  "productionMode": true,
  "staticServerFallbackUrl": "https://sslstatic.wix.com/",
  "userFilesUrl": "http://static.parastorage.com/",
  "staticHTMLComponentUrl": "http://wordsareevil.wix.com.usrfiles.com/",
  "secured": false,
  "ecommerceCheckoutUrl": "https://www.safer-checkout.com/",
  "premiumServerUrl": "https://premium.wix.com/",
  "appRepoUrl": "http://assets.wix.com/wix-lists-ds-webapp",
  "digitalGoodsServerUrl": "http://dgs.wixapps.net/",
  "wixCloudBaseDomain": "cloud.wix.com",
  "publicStaticsUrl": "http://static.parastorage.com/services/wix-public/1.160.0",
  "staticDocsUrl": "http://media.wix.com/ugd"
};
var santaModels = true;
var rendererModel = {
  "metaSiteId": "ad6b2d16-44c4-47b6-ae3d-2d7aa0563eef",
  "siteInfo": {
    "documentType": "UGC",
    "applicationType": "HtmlWeb",
    "siteId": "83720850-13ad-4e30-8dd6-3b2d56c59c09",
    "siteTitleSEO": "eunhaseoul"
  },
  "clientSpecMap": {
    "14": {
      "type": "sitemembers",
      "applicationId": 14,
      "collectionType": "Open",
      "smcollectionId": "1b3989c9-922c-4955-86b2-1b0c17179721"
    },
    "3": {
      "type": "appbuilder",
      "applicationId": 3,
      "appDefinitionId": "3d590cbc-4907-4cc4-b0b1-ddf2c5edf297",
      "instanceId": "13ce4865-fd92-b82e-15f2-76f99ed6ecff",
      "state": "Initialized"
    }
  },
  "premiumFeatures": ["AdsFree"],
  "geo": "SGP",
  "languageCode": "ko",
  "previewMode": false,
  "userId": "ec9579ba-da72-4953-9945-f32307ee5394",
  "siteMetaData": {
    "preloader": {"enabled": true},
    "adaptiveMobileOn": true,
    "quickActions": {
      "socialLinks": [],
      "colorScheme": "dark",
      "configuration": {
        "quickActionsMenuEnabled": false,
        "navigationMenuEnabled": true,
        "phoneEnabled": false,
        "emailEnabled": false,
        "addressEnabled": false,
        "socialLinksEnabled": false
      }
    },
    "contactInfo": {"companyName": "", "phone": "", "fax": "", "email": "", "address": ""}
  },
  "runningExperiments": {
    "autogeneratedshapesskins": "new",
    "ngcore": "new",
    "sandboxiframeineditor": "new",
    "lang_nl": "new",
    "wixappsgalleries": "new",
    "ecomgalleries": "new",
    "disablehorizontalmenu": "new",
    "lazyprovision": "new",
    "atntfixlists": "new",
    "mobileactionsmenu": "new",
    "exitmobilemode": "new",
    "workaroundsaveddeadcompskin": "new",
    "nougcanalytics": "new",
    "appbuilderdeletetype": "new",
    "sitepagesvalidation": "new",
    "redirectfeature301data": "new",
    "linkfixeroverride": "new",
    "redirectfeature301": "new",
    "lazyprovisiontemp": "new",
    "animation3dfix": "new",
    "landingpagesupport": "new",
    "wixappstranslation": "new",
    "subscribeformsendnewsletter": "new",
    "lesserwidthissue": "new",
    "appbuildertags": "new",
    "sitenavigationrefactor": "new",
    "blogrss": "new",
    "animationnewbehaviors": "new",
    "customsitemenu": "new",
    "blogmanager": "new"
  }
};
var publicModel = {
  "domain": "wix.com",
  "externalBaseUrl": "http:\/\/eunhaseoul.com",
  "pageList": {
    "masterPage": ["http:\/\/static.wixstatic.com\/sites\/ec9579_5d2aedd0cf61830365448295a9fbde67_31.json.z?v=3", "http:\/\/staticorigin.wixstatic.com\/sites\/ec9579_5d2aedd0cf61830365448295a9fbde67_31.json.z?v=3", "http:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page\/ec9579_5d2aedd0cf61830365448295a9fbde67_31.json"],
    "pages": [{
      "pageId": "cee5",
      "title": "&#47788;&#44396;",
      "urls": ["http:\/\/static.wixstatic.com\/sites\/ec9579_9797473e312d67438009c4a0abe62639_23.json.z?v=3", "http:\/\/staticorigin.wixstatic.com\/sites\/ec9579_9797473e312d67438009c4a0abe62639_23.json.z?v=3", "http:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page\/ec9579_9797473e312d67438009c4a0abe62639_23.json"]
    }, {
      "pageId": "c7zb",
      "title": "&#44277;&#50672;",
      "urls": ["http:\/\/static.wixstatic.com\/sites\/ec9579_7766b95423e6f7255613e4bd4912bc30_24.json.z?v=3", "http:\/\/staticorigin.wixstatic.com\/sites\/ec9579_7766b95423e6f7255613e4bd4912bc30_24.json.z?v=3", "http:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page\/ec9579_7766b95423e6f7255613e4bd4912bc30_24.json"]
    }, {
      "pageId": "c1yhh",
      "title": "contact",
      "urls": ["http:\/\/static.wixstatic.com\/sites\/ec9579_3875f5f4a3ec8ef8454c79f9fe8af830_17.json.z?v=3", "http:\/\/staticorigin.wixstatic.com\/sites\/ec9579_3875f5f4a3ec8ef8454c79f9fe8af830_17.json.z?v=3", "http:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page\/ec9579_3875f5f4a3ec8ef8454c79f9fe8af830_17.json"]
    }, {
      "pageId": "ccta",
      "title": "&#50536;&#48276;",
      "urls": ["http:\/\/static.wixstatic.com\/sites\/ec9579_5a67dc196f67b84154e4bba1e02eafab_27.json.z?v=3", "http:\/\/staticorigin.wixstatic.com\/sites\/ec9579_5a67dc196f67b84154e4bba1e02eafab_27.json.z?v=3", "http:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page\/ec9579_5a67dc196f67b84154e4bba1e02eafab_27.json"]
    }, {
      "pageId": "cfp1",
      "title": "&#51008;&#54616;&#49436;&#50872;",
      "urls": ["http:\/\/static.wixstatic.com\/sites\/ec9579_6edb356f158b331dc8d3655a2b194338_29.json.z?v=3", "http:\/\/staticorigin.wixstatic.com\/sites\/ec9579_6edb356f158b331dc8d3655a2b194338_29.json.z?v=3", "http:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page\/ec9579_6edb356f158b331dc8d3655a2b194338_29.json"]
    }, {
      "pageId": "mainPage",
      "title": "home",
      "urls": ["http:\/\/static.wixstatic.com\/sites\/ec9579_715270b01482bfff1f56f55345add7bd_31.json.z?v=3", "http:\/\/staticorigin.wixstatic.com\/sites\/ec9579_715270b01482bfff1f56f55345add7bd_31.json.z?v=3", "http:\/\/fallback.wix.com\/wix-html-editor-pages-webapp\/page\/ec9579_715270b01482bfff1f56f55345add7bd_31.json"]
    }],
    "mainPageId": "mainPage"
  },
  "timeSincePublish": 202585387
};
var googleAnalytics = "";
var googleRemarketing = "";
var facebookRemarketing = "";
var adData = {};
var mobileAdData = {};
var usersDomain = "https://users.wix.com/wix-users";
var santaBase = '';
var clientSideRender = true;
$(function () {
  $("#my-content").delay(16000).fadeOut(0);
});