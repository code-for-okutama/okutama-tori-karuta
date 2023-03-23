function Piles() {
    let birds = new Birds();
    // --
    this.kumotoriyama = {
        cards: [birds.misosazai, birds.uguisu, birds.kakesu, birds.komadori, birds.fukurou,
            birds.koruri, birds.ruribitaki, birds.higara, birds.toratsugumi, birds.aogera,
            birds.ooakagera],
        location: '雲取山',
        image: 'otherImages/kumotoriyama.jpg',
    };
    this.takanosuyama = {
        cards: [birds.hiyodori, birds.misosazai, birds.ooruri, birds.kibitaki, birds.kogera,
            birds.kakesu, birds.ikaru, birds.komadori, birds.yabusame, birds.fukurou,
            birds.aobato, birds.kijibato, birds.yamadori, birds.koruri, birds.ruribitaki,
            birds.shijyukara, birds.higara, birds.akahara, birds.toratsugumi, birds.aogera,
            birds.ooakagera],
        location: '鷹ノ巣山',
        image: 'otherImages/takanosuyama.jpg',
    };
    this.yamanofurusatomura = {
        cards: [birds.hojiro, birds.hiyodori, birds.misosazai, birds.uguisu, birds.ooruri,
            birds.kibitaki, birds.kogera, birds.tobi, birds.kakesu, birds.kisekirei,
            birds.hashibosogarasu, birds.gabicho, birds.ikaru, birds.jyobitaki, birds.yabusame,
            birds.sankoucho, birds.fukurou, birds.aobato, birds.kijibato, birds.yamadori,
            birds.mozu, birds.shijyukara, birds.yamasemi, birds.kawasemi, birds.higara,
            birds.toratsugumi, birds.aogera],
        location: '山のふるさと村',
        image: 'otherImages/yamanofurusatomura.jpg',
    };
    this.nippara = {
        cards: [birds.hojiro, birds.hiyodori, birds.misosazai, birds.uguisu, birds.ooruri,
            birds.kibitaki, birds.kogera, birds.kakesu, birds.kisekirei, birds.hashibosogarasu,
            birds.gabicho, birds.ikaru, birds.jyobitaki, birds.yabusame, birds.fukurou,
            birds.aobato, birds.kijibato, birds.mozu, birds.shijyukara, birds.higara,
            birds.toratsugumi, birds.aogera,],
        location: '日原',
        image: 'otherImages/nippara.jpg',
    };
    this.shiromaru = {
        cards: [birds.hiyodori, birds.misosazai, birds.ooruri, birds.kibitaki, birds.kakesu,
            birds.kisekirei, birds.fukurou, birds.ikaru, birds.aobato, birds.yamasemi,
            birds.kawasemi],
        location: '白丸湖',
        image: 'otherImages/shiromaruko.jpg',
    };
    this.hikawa = {
        cards: [birds.hojiro, birds.hiyodori, birds.misosazai, birds.uguisu, birds.ooruri,
            birds.kibitaki, birds.kogera, birds.tobi, birds.suzume, birds.kisekirei,
            birds.hashibosogarasu, birds.gabicho, birds.jyobitaki, birds.kijibato, birds.mozu,
            birds.shijyukara, birds.yamasemi, birds.kawasemi, birds.aogera],
        location: '氷川',
        image: 'otherImages/hikawa.jpg',
    };
    this.ogouchijinja = {
        cards: [birds.hiyodori, birds.misosazai, birds.ooruri,
            birds.kibitaki, birds.kogera, birds.tobi, birds.kakesu, birds.kisekirei,
            birds.fukurou, birds.kijibato, birds.shijyukara, birds.yamasemi, birds.kawasemi,
            birds.higara, birds.aogera],
        location: '小河内神社',
        image: 'otherImages/ogouchijinja.jpg',
    };
    this.hinoharatominnomori = {
        cards: [birds.misosazai, birds.uguisu, birds.ooruri, birds.kibitaki, birds.kogera,
            birds.kakesu, birds.kisekirei, birds.ikaru, birds.komadori, birds.yabusame,
            birds.fukurou, birds.aobato, birds.kijibato, birds.yamadori, birds.koruri,
            birds.ruribitaki, birds.shijyukara, birds.higara, birds.akahara, birds.toratsugumi,
            birds.aogera, birds.ooakagera],
        location: '檜原都民の森',
        image: 'otherImages/hinoharatominnomori.jpg',
    };
    this.mitakesan = {
        cards: [birds.hojiro, birds.hiyodori, birds.misosazai, birds.uguisu, birds.ooruri,
            birds.kibitaki, birds.kogera, birds.kakesu, birds.kisekirei, birds.hashibosogarasu,
            birds.gabicho, birds.ikaru, birds.jyobitaki, birds.yabusame, birds.fukurou,
            birds.aobato, birds.kijibato, birds.yamadori, birds.shijyukara, birds.higara,
            birds.toratsugumi, birds.aogera,],
        location: '御岳山',
        image: 'otherImages/mitakesan.jpg',
    };
    this.all = {
        cards: [birds.hojiro, birds.hiyodori, birds.misosazai, birds.uguisu, birds.ooruri,
            birds.kibitaki, birds.kogera, birds.tobi, birds.kakesu, birds.suzume,
            birds.kisekirei, birds.hashibosogarasu, birds.gabicho, birds.ikaru, birds.jyobitaki,
            birds.komadori, birds.yabusame, birds.sankoucho, birds.fukurou, birds.aobato,
            birds.kijibato, birds.yamadori, birds.koruri, birds.ruribitaki, birds.mozu,
            birds.shijyukara, birds.yamasemi, birds.kawasemi, birds.higara, birds.akahara,
            birds.toratsugumi, birds.aogera, birds.ooakagera],
        cards: [birds.hiyodori, birds.misosazai],
        location: '全部MIX',
    };
    this.getPile = function (type) {
        switch (type) {
            case 'kmtr' :
                return this.kumotoriyama;
            case 'tkns' :
                return this.takanosuyama;
            case 'ymfr' :
                return this.yamanofurusatomura;
            case 'nppr' :
                return this.nippara;
            case 'srmr' :
                return this.shiromaru;
            case 'hkwa' :
                return this.hikawa;
            case 'ogch':
                return this.ogouchijinja;
            case 'hnhr' :
                return this.hinoharatominnomori;
            case 'mtke' :
                return this.mitakesan;
            default :
                return this.all;
        }
    }
}