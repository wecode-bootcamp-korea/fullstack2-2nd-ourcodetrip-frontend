export const categoryQuery = [
  {
    id: 1,
    name: '투어',
    query: 'tour',
    subCategory: [
      {
        id: 1,
        name: '시내투어',
        query: 'tour:city_tour',
      },
      {
        id: 2,
        name: '미술관/박물관투어',
        query: 'tour:museum_tour',
      },
      {
        id: 3,
        name: '랜선투어',
        query: 'tour:online_tour',
      },
      {
        id: 4,
        name: '오디오투어',
        query: 'tour:audio_tour',
      },
      {
        id: 5,
        name: '근교투어',
        query: 'tour:suburban_tour',
      },
      {
        id: 6,
        name: '야경투어',
        query: 'tour:night_tour',
      },
      {
        id: 7,
        name: '캠퍼스/비지니스/통역',
        query: 'tour:business_tour',
      },
      {
        id: 8,
        name: '이색투어',
        query: 'tour:special_tour',
      },
      {
        id: 9,
        name: '자연투어',
        query: 'tour:nature_tour',
      },
      {
        id: 10,
        name: '맞춤투어',
        query: 'tour:custom_tour',
      },
    ],
  },
  {
    id: 2,
    name: '입장권',
    query: 'ticket',
    subCategory: [
      {
        id: 11,
        name: '테마파크',
        query: 'ticket:theme_park',
      },
      {
        id: 12,
        name: '동물원/아쿠아리움',
        query: 'ticket:zoo_aquarium',
      },
      {
        id: 13,
        name: '박물관/미술관',
        query: 'ticket:museum_art',
      },
      {
        id: 14,
        name: '전망대',
        query: 'ticket:observatory',
      },
      {
        id: 15,
        name: '공연/뮤지컬',
        query: 'ticket:show_musical',
      },
      {
        id: 16,
        name: '기타/콤보티켓',
        query: 'ticket:add_combo_ticket',
      },
      {
        id: 17,
        name: '마이리얼호캉스',
        query: 'ticket:my_real_hotel',
      },
    ],
  },
  {
    id: 3,
    name: '액티비티',
    query: 'activity',
    subCategory: [
      {
        id: 18,
        name: '스노클링/다이빙',
        query: 'activity:snorkeling',
      },
      {
        id: 19,
        name: '서핑',
        query: 'activity:surfing',
      },
      {
        id: 20,
        name: '수상액티비티',
        query: 'activity:water_activity',
      },
      {
        id: 21,
        name: '크루즈/요트',
        query: 'activity:cruise_yacht',
      },
      {
        id: 22,
        name: '골프',
        query: 'activity:golf',
      },
      {
        id: 23,
        name: '실내액티비티',
        query: 'activity:indoor_activity',
      },
      {
        id: 24,
        name: '아웃도어',
        query: 'activity:outdoor_activity',
      },
      {
        id: 25,
        name: '이색체험',
        query: 'activity:special_activity',
      },
    ],
  },
  {
    id: 4,
    name: '클래스',
    query: 'class',
    subCategory: [
      {
        id: 26,
        name: '쿠킹/베이킹',
        query: 'class:cook_bake_class',
      },
      {
        id: 27,
        name: '가죽/악세사리',
        query: 'class:leather_accessory_class',
      },
      {
        id: 28,
        name: '수공예',
        query: 'class:handmade_class',
      },
      {
        id: 29,
        name: '미술/음악/사진',
        query: 'class:art_music_photo_class',
      },
      {
        id: 30,
        name: '플라워/캔들/향수',
        query: 'class:flower_candle_perfume_class',
      },
      {
        id: 31,
        name: '건강/뷰티',
        query: 'class:health_beauty_class',
      },
      {
        id: 32,
        name: '요가/다도/명상',
        query: 'class:yoga_tea_mind_class',
      },
      {
        id: 33,
        name: '스포츠/아웃도어',
        query: 'class:sports_outdoor_class',
      },
      {
        id: 34,
        name: '이색클래스',
        query: 'class:special_class',
      },
    ],
  },
  {
    id: 5,
    name: '스냅촬영',
    query: 'snap',
    subCategory: [
      {
        id: 35,
        name: '웨딩/허니문',
        query: 'snap:wedding_snap',
      },
      {
        id: 36,
        name: '우정/연인/가족',
        query: 'snap:several_snap',
      },
      {
        id: 37,
        name: '1인촬영',
        query: 'snap:personal_snap',
      },
      {
        id: 38,
        name: '스튜디오/단체',
        query: 'snap:group_snap',
      },
    ],
  },
  {
    id: 6,
    name: '미식',
    query: 'foodie',
    subCategory: [
      {
        id: 39,
        name: '식사권',
        query: 'foodie:meal_voucher',
      },
      {
        id: 40,
        name: '밀키트',
        query: 'foodie:meal_kit',
      },
    ],
  },
  {
    id: 7,
    name: '스파/힐링',
    query: 'spa_healing',
    serviceCategoryId: 4,
    subCategory: [
      {
        id: 41,
        name: '스파/마사지',
        query: 'spa_healing:spa_massage',
      },
      {
        id: 42,
        name: '뷰티/힐링',
        query: 'spa_healing:beauty_healing',
      },
    ],
  },
  {
    id: 8,
    name: '이동/교통편의',
    query: 'transportation',
    subCategory: [
      {
        id: 43,
        name: '공항 픽업/샌딩',
        query: 'transportation:airport_pickup_sending',
      },
      {
        id: 44,
        name: '도시간 이동',
        query: 'transportation:pickup_sending',
      },
      {
        id: 45,
        name: '짐배송/기타',
        query: 'transportation:luggage_add_service',
      },
    ],
  },
  {
    id: 9,
    name: '대여',
    query: 'rental',
    subCategory: [
      {
        id: 46,
        name: '유심/와이파이',
        query: 'rental:usim_wifi',
      },
      {
        id: 47,
        name: '의상렌탈',
        query: 'rental:costume_rental',
      },
      {
        id: 48,
        name: '촬영용품',
        query: 'rental:camera_rental',
      },
      {
        id: 49,
        name: '피크닉/캠핑용품',
        query: 'rental:picnic_camping',
      },
    ],
  },
];
