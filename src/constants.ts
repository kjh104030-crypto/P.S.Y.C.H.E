export type WorldSection = 'factions' | 'terms' | 'ego' | 'characters';

export interface CharacterProfile {
  gender?: string;
  department?: string;
  weapon?: string;
  personalityKeywords?: string[];
  features?: string[];
  relationships?: { name: string; relation: string; description: string }[];
  logs?: string[];
}

export interface LoreEntry {
  id: string;
  title: string;
  description: string;
  subContent?: LoreEntry[];
  example?: string;
  color?: string;
  profile?: CharacterProfile;
}

export const FACTIONS: LoreEntry[] = [
  {
    id: 'psyche',
    title: 'P.S.Y.C.H.E',
    description: '정신 공간 인지 재해 집행부 (Psycho Spatial Yield Cognitive Hazard Executive). 개방된 자아심도를 닫는 프시케들의 본부.',
  },
  {
    id: 'schadenfreude',
    title: '샤덴프로이데 (Schadenfreude)',
    description: '가스라이터들이 소속된 곳. 점 조직이기에 서로가 서로를 알지 못할 때도 있다.',
    subContent: [
      {
        id: 'member-spruch',
        title: '슈프리흐',
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '샤덴프로이데 (Schadenfreude)',
          weapon: '지팡이',
          personalityKeywords: ['능글맞은', '영리한', '차분한'],
          features: [
            '왼눈의 시력을 잃음',
            '오른손 소실',
            '속담이나 비유를 자주 사용한다',
            '몸짓을 섞으며 대화한다',
            '남을 조종하는 기술이 뛰어나다'
          ],
          relationships: [
            { name: "'선생'", relation: '인격 소실 관찰부 / 재미있는 실험체', description: '포스트잇 장막이라... 사람은 누구나 숨기고픈 \'자조\'가 있기 마련이지요. 과연 무엇을 감추고 있을까, 손을 대보고 싶은 충동이 드는군요.' },
            { name: '라비린스', relation: '벤더 게슈탈트 부서 / 경계', description: '징계부 딱지를 떼어내도 한 번 검사(劍士)의 피는 쉽게 씻기지 않지요. 비유를 들자면 눈먼 사자 같은 사람입니다. 가까이 가기엔 이빨이 조금 날카로워요.' }
          ],
          logs: [
            '샤덴프로이데 기밀 전언: \'달콤한 독은 잔에 가득 차 흘러넘칠 때 가장 맛이 좋은 법.\' 표적의 정신 균열을 2% 더 벌려놓았다.',
            '상황 보고: 지팡이를 땅에 짚으며 자아진동을 간섭. 프시케들의 구출 작전 경로를 꼬이게 만들어 자아심도가 스스로 붕괴하도록 수면 아래에서 조종.'
          ]
        }
      },
      {
        id: 'member-adaline',
        title: '아달린',
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '샤덴프로이데 (Schadenfreude)',
          weapon: '망치',
          personalityKeywords: ['퇴폐스러운', '피곤한', '늘어지는', '권태로운'],
          features: [
            '행동이 느리다',
            '항상 몽롱한 상태를 유지한다',
            '밧줄을 가지고 다닌다'
          ],
          relationships: [
            { name: '슈프리흐', relation: '상관 / 귀찮은 음성', description: '말이 너무 많아. 가끔 자장가로는 나쁘지 않지만... 좀 조용히 해줬으면 좋겠네.' },
            { name: '모더니스트', relation: '동료 / 수면 방해꾼', description: '너무 시끄러워서 내 낮잠을 깨우곤 해. 철퇴 소리 때문에 머리가 울린다고...' }
          ],
          logs: [
            '작전 불참 사유: 잠기운이 가시지 않아 대상의 동선을 밧줄로 대충 묶어 막아두고 이탈. 결과적으로 타겟은 밧줄에 걸려 넘어지며 기절함.',
            '비품 요청: 수면용 안대와 귀마개. 망치로 치는 것도 이젠 귀찮다. 그냥 알아서 부서지면 안 되나.'
          ]
        }
      },
      {
        id: 'member-vandali',
        title: '반달리',
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '샤덴프로이데 (Schadenfreude)',
          weapon: '크로우바',
          personalityKeywords: ['불신주의', '경계심 강한', '폭력적인'],
          features: [
            'H.T.P 부서에 대한 맹목적 증오'
          ],
          relationships: [
            { name: 'H.T.P 부서', relation: '적대 대상 / 파괴 충동', description: '위선자 놈들. 그 하얀 가운을 피로 물들여주지. 내 크로우바가 그들의 두개골보다 더 단단한 건 확실하니까.' },
            { name: '\'제자\'', relation: '동료 / 거슬림', description: '겁먹은 강아지처럼 구는 꼴이 아주 맘에 안 들어. 그럴 거면 총은 폼으로 들고 다니나?' }
          ],
          logs: [
            '기물 파손 경위서: H.T.P 부서의 통신 중계기를 크로우바로 파괴함. 이유는... 그냥 꼴도 보기 싫어서.',
            '전투 기록: 프시케의 구출 대상이 H.T.P 요원이라는 것을 확인하자마자, 구조물과 함께 해당 요원까지 붕괴시킬 뻔한 것을 슈프리흐가 저지함.'
          ]
        }
      },
      {
        id: 'member-disciple',
        title: '\'제자\'',
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '샤덴프로이데 (Schadenfreude)',
          weapon: '권총',
          personalityKeywords: ['소심한', '겁 많은', '애정결핍'],
          relationships: [
            { name: '슈프리흐', relation: '스승 / 절대적 의존', description: '스승님이 시키는 건 뭐든 할 수 있어요... 제발 절 버리지만 말아주세요. 시키는 대로, 가르쳐주신 대로 다 하고 있잖아요...' },
            { name: '반달리', relation: '동료 / 공포 대상', description: '눈이 마주칠 때마다 절 죽일 것처럼 노려봐요... 너무 무서워서 권총 손잡이만 꽉 쥐게 돼요.' }
          ],
          logs: [
            '훈련 기록: 오늘도 총을 쏠 때 반사적으로 눈을 감아버렸다. 스승님께 들켜서 실망하시면 안 되는데...',
            '작전 수행: 슈프리흐 님의 지시대로 우회하던 표적의 다리를 정확히 쐈다. 피가 많이 나서 울음을 터뜨렸지만, 칭찬받을 걸 생각하니 안정이 되었다.'
          ]
        }
      },
      {
        id: 'member-modernist',
        title: '모더니스트',
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '샤덴프로이데 (Schadenfreude)',
          weapon: '철퇴',
          personalityKeywords: ['세련된', '철없는', '방정맞은'],
          features: [
            '줄임말과 신조어를 많이 사용함',
            '과장된 행동을 보임',
            'ADHD',
            '모더니스트가 진명이 아님'
          ],
          relationships: [
            { name: '아달린', relation: '동료 / 노잼', description: '언니는 맨날 자기만 함 ㅠㅠ 텐션 쫌 올려서 나랑 놀아주면 안 되나? 옆에서 철퇴 붕붕 돌려도 안 깸 ㄹㅇ 신기;' },
            { name: '반달리', relation: '동료 / 꿀잼 타겟', description: '반달찡 맨날 빡쳐있는 거 졸귀탱~ 뒤에서 몰래 접근해서 놀라게 하면 반응 개혜자임ㅋㅋ (어제 맞을 뻔함)' }
          ],
          logs: [
            'SNS 업로드 차단 로그: 타겟 피지컬 폼 미쳤따리~ 철퇴로 뚝배기 깨고 인증샷! 올리려다 보안 채널 필터링에 걸려서 삭제됨 ㅠㅠ',
            '징계 이력: 진지한 작전 회의 시간에 집중 안 돼서 자기 철퇴에 핑크색 리본 달고 예쁘다고 혼자 박수 치다가 쫓겨남.'
          ]
        }
      }
    ]
  }
];

export const EGO_DEPTH: LoreEntry[] = [
  {
    id: 'ego-depth',
    title: '자아심도 (Ego Depth)',
    description: '감정과 기억, 무의식이 현실 구조처럼 굳어져 형성된 또 하나의 차원. 특정 조건 아래에서 균열처럼 열리기도 하며, 감정이 강할수록 선명하고 거대해진다.'
  },
  {
    id: 'ego-abyss',
    title: '자아심층 (Ego Abyss)',
    description: '자아심도의 가장 깊은 곳. 드림 코어가 위치해 있으며, 인물을 형성한 핵심 감정과 근원적 기억이 잠들어 있다.'
  },
  {
    id: 'phenomena',
    title: '현상체 (Phenomena Entity)',
    description: '과거의 기억이나 왜곡된 인식 등으로부터 자아심도 내부에 만들어진 존재. 인간의 형태로 나타나며 진입자와 상호작용한다.'
  },
  {
    id: 'status',
    title: '상태 유형',
    description: '자아심도의 안정성에 따른 분류.',
    subContent: [
      { id: 'superego', title: '초자아 (Superego)', description: '완전한 자아심도. 드림 코어로 도달하는 과정이 비정상적으로 길다.' },
      { id: 'id', title: '이드 (Id)', description: '불안정한 자아심도. 현실에도 물리적인 영향을 미친다.' }
    ]
  }
];

export const TERMS: LoreEntry[] = [
  {
    id: 'opening',
    title: '개방 (Open Depth)',
    description: '자아심도를 여는 행위.',
    subContent: [
      { id: 'gaslighting', title: '가스라이팅 (Gaslighting)', description: '타인이 트라우마를 자극하여 강제로 개방시키는 행위. 매우 위험하다.' },
      { id: 'submergence', title: '침잠 (Submergence)', description: '감정이 극한에 달해 한계를 넘어 자아심도가 개방되는 일반적인 현상.' }
    ]
  },
  {
    id: 'closing',
    title: '자아심도를 닫는 방법',
    description: '드림 코어에 접근해 감정을 받아들이게 유도한다.',
    subContent: [
      { id: 'accept', title: '받아들일 경우', description: '자아심도가 닫히고 주인이 정상으로 돌아온다. 드림 코어는 장신구 형태로 남는다.' },
      { id: 'reject', title: '받아들이지 않을 경우', description: '현실까지 침식된다. 주인을 죽이거나 드림 코어를 파괴해야 한다 (파괴 시 주인은 감정을 상실함).' }
    ]
  },
  {
    id: 'roles',
    title: '역할군',
    description: '자아심도와 연관된 존재들.',
    subContent: [
      { id: 'psyche-term', title: '프시케', description: '자아심도를 닫는 자들을 칭한다.' },
      { id: 'gaslighter-term', title: '가스라이터', description: '타인의 자아심도를 강제로 개방시키는 자들을 칭한다.' }
    ]
  }
];

export const PSYCHE_DEPTS: LoreEntry[] = [
  { 
    id: 'dep-identity', 
    title: '인격 소실 관찰부', 
    description: '자아 해리성 정체감 중첩도를 담당하는 부서. 가스라이터와 샤덴프로이데의 검거를 담당하기도 한다.', 
    color: '#9CA3AF',
    subContent: [
      { 
        id: 'member-1', 
        title: '에이달라나', 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '인격 소실 관찰부',
          weapon: '너클, 전기충격기',
          personalityKeywords: ['능글맞은', '여유로운', '불안정한'],
          features: [
            '에이프릴을 자주 괴롭힌다',
            '경미한 우울증을 보인다'
          ],
          relationships: [
            { name: '에이프릴', relation: '직장 후배 / 장난 대상', description: '주요 놀림감이자 활력소. 반응이 매번 신선해서 놀리는 맛이 있다. 하지만 날붙이에 트라우마가 있는 걸 알기에 내 전기충격기는 잘 보여주지 않으려 한다.' },
            { name: "'선생'", relation: '직장 동료 / 관찰 대상', description: '매번 다정하게 대해주지만 포스트잇 뒤의 진짜 얼굴이 늘 궁금하다. 언젠가 몰래 떼어볼 작정이다.' }
          ],
          logs: [
            '인격 소실 관찰부 일일 일지: 에이프릴의 서랍에 가짜 바퀴벌레 장난감을 넣어두었다. 소동 점수 10점 만점에 9.5점.',
            '작전 이력: 자아심도 [죄책감] 지역 파괴 작전 도중 에이프릴을 감싸며 단독으로 2급 현상체를 무력화함.'
          ]
        }
      },
      { 
        id: 'member-2', 
        title: '에이프릴', 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '인격 소실 관찰부',
          weapon: '톤파',
          personalityKeywords: ['츤데례', '내향적인', '공감하는'],
          features: [
            '인격 소실 관찰부 막내',
            '머리를 기르고 있다',
            '여러모로 과거에 머무는 경향이 강하다',
            '날붙이를 싫어한다'
          ],
          relationships: [
            { name: '에이달라나', relation: '직장 선배 / 천적', description: '매번 쓸데없는 장난을 쳐서 성가시다. 하지만 현장에서 위험할 때는 항상 앞장서서 지켜주기에 아주 미워할 수는 없다.' },
            { name: '밀리건', relation: '임시 보호자 / 신뢰', description: '관찰부에서 가장 어른스러운 사람. 늘 담배 연기를 뿜어내지만, 신입인 나를 조용히 배려해주신다.' }
          ],
          logs: [
            '개인 일기: 에이달라나 선배가 내 톤파에 메롱 스티커를 붙여놓았다. 다음에는 너클에 전기 충격을 먹일 테다.',
            '작전 합동 평가: 트라우마 자극 원인이 \'날붙이\'인 것을 파악하고, 날카로운 공격을 차단하는 톤파 방어로 현상체 무력화에 일조.'
          ]
        }
      },
      { 
        id: 'member-3', 
        title: '밀리건', 
        description: '소속 요원',
        profile: {
          gender: '男',
          department: '인격 소실 관찰부',
          weapon: '진압방패',
          personalityKeywords: ['느긋한', '귀찮음이 강한', '어른의 여유'],
          features: [
            '중년. 인격 소실 관찰부 최연장자',
            '담배를 물지 않았을 때를 찾기 힘든 애연가',
            '과거의 일인지 양 팔뚝에 잔상처가 있다'
          ],
          relationships: [
            { name: '에이달라나', relation: '부하 직원 / 주의 요망', description: '유능하지만 가끔 선을 넘는 장난을 친다. 좀 얌전해졌으면 좋겠는데...' },
            { name: '에이프릴', relation: '막내 요원 / 보호 대상', description: '아직 어리고 여린 아이. 억지로 어른스러워지려 애쓰는 게 보여서 안쓰럽다. 방패 뒤는 언제나 열려 있으니 편하게 무기를 휘두르게 해주려 한다.' }
          ],
          logs: [
            '인격 소실 관리 기록: 담배 한 보루를 압수당했다. 범인은 벤더 게슈탈트 부서의 모 요원으로 강하게 추정된다.',
            '작전 지원 사격: 초자아 붕괴 급성 자아심도 진입 시, 최대 크기의 진압방패로 낙하하는 붕괴 파편 전체를 방어하여 대원 전원 무사 탈출.'
          ]
        }
      },
      { 
        id: 'p-seonsaeng', 
        title: "'선생'", 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '인격 소실 관찰부',
          weapon: '권총',
          personalityKeywords: ['유순한', '공감하는', '다정한'],
          features: [
            '포스트잇으로 얼굴을 가려 좀처럼 눈을 볼 수 없다',
            '본명은 밝히지 않고 있다',
            '누군가를 부를 때 ~씨를 붙인다 (ex: 에이프릴 씨, 밀리건 씨)'
          ],
          relationships: [
            { name: '에이달라나', relation: '부서원 / 걱정스러운 아이', description: '에이달라나 씨는 늘 밝아 보이지만, 가끔 혼자 있을 때 비치는 우울한 그림자가 마음에 걸려요.' },
            { name: '에이프릴', relation: '부서원 / 기특한 아이', description: '에이프릴 씨는 매일 머리를 소중히 가꾸는 모습이 무척 사랑스러워요. 과거에 머무르기보다는 눈앞의 빛을 보길 응원해요.' }
          ],
          logs: [
            '알림장: 에이달라나 씨가 내 얼굴에 붙은 포스트잇에 안경을 그려놓았다. 다행히 거울을 보고 알아챘다.',
            '치료 및 보고: 자아심도에서 심근 탈출증을 보이는 비협조적 대상을 상대로 특유의 유순하고 공감하는 대화를 통해 드림 코어를 스스로 자진 반납하게 유도 성공.'
          ]
        }
      }
    ]
  },
  { 
    id: 'dep-bender', 
    title: '벤더 게슈탈트 부서', 
    description: '프시케의 교육을 담당하는 부서. Bender-Gestalt Test, 일명 BGT를 통해 프시케를 교육시킨다.', 
    color: '#22C55E',
    subContent: [
      { 
        id: 'member-1', 
        title: '라비린스', 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '벤더 게슈탈트 부서',
          weapon: '장검, 소드브레이커',
          personalityKeywords: ['활발한', '밝은', '특이한'],
          features: [
            '전 초자아 징계부 소속',
            '좋아하는 것을 말할 때에는 거의 숨도 쉬지 않고 말함',
            '검 수집을 좋아함',
            '자아심도를 받아들여 은 목걸이를 장신구로 차고 있음'
          ],
          relationships: [
            { name: '비제트', relation: '부서 동료 / 조용한 친구', description: '비제트 씨는 맨날 피곤해 보이지만 제가 검을 컬렉션할 때 조용히 들어줘요! 비록 다음 날엔 원두를 씹어먹고 있지만요.' },
            { name: '베이머', relation: '부서 동료 / 이성의 끈', description: '가끔 이성적인 얘길 하며 저를 진정시키려 해요. 하지만 제가 전 초자아 징계부 얘기를 꺼내면 조용히 곤봉을 꽉 쥐시더라고요!' }
          ],
          logs: [
            '훈련 일지: 신입 프시케 모의 전투 교육 시 시범을 보였는데, 흥분해서 검 사양을 숨도 안 쉬고 5분 동안 설명했다가 프시케가 질려버림.',
            '조사 보고: 자아심도 내 강박 구조물(은 목걸이의 근원지)을 장검 및 소드브레이커 연격으로 가볍게 분쇄하여 진입 경로 단축.'
          ]
        }
      },
      { 
        id: 'member-2', 
        title: '비제트', 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '벤더 게슈탈트 부서',
          weapon: '단검',
          personalityKeywords: ['피곤한', '늘어지는', '권태로운'],
          features: [
            '가끔 커피 원두를 쌩으로 씹어먹음',
            '평소 웃는 법이 없다'
          ],
          relationships: [
            { name: '라비린스', relation: '부서 동료 / 귀찮음', description: '너무 시끄럽다... 검 이야기로 1시간 내내 숨도 안 쉬고 말할 때는 귀를 막고 싶다. 하지만 가끔 검 장식으로 커피 원두를 까줘서 그냥 둔다.' },
            { name: '미노', relation: '부서 동료 / 요주의', description: '남을 잘 속이는 건 알지만 내 원두까지 속이지 말았으면 한다. 몸을 끊임없이 들썩여서 보고 있으면 나까지 정신이 아득해진다.' }
          ],
          logs: [
            '근무 일지: 하루 동안 마신 에스프레소 5샷, 씹어먹은 원두 약 40알. 여전히 잠이 온다.',
            '전투 기록: 표적의 허를 찌르는 단검 기습을 성공시켜 현상체의 적대적 신경로를 완전히 끊어냄.'
          ]
        }
      },
      { 
        id: 'member-3', 
        title: '미노', 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '벤더 게슈탈트 부서',
          weapon: '톤파',
          personalityKeywords: ['자신이든 타인이든 그 누구도 그 무엇도 사랑할 수 없는(NT)', '욕구는 깊으나 사랑은 얕다.'],
          features: [
            '남을 잘 속임',
            '몸을 가만히 있는 것을 하지 못함'
          ],
          relationships: [
            { name: '비제트', relation: '부서 동료 / 원두 사재기범', description: '비제트 선배님 얼굴에 원두 스프레이를 뿌렸더니 전혀 웃지도 않고 그냥 원두를 한 알 집어드셨다. 진짜 무섭다.' },
            { name: '베이머', relation: '부서 동료 / 거짓말 안 통하는 상대', description: '베이머 씨 앞에서는 무슨 속임수나 은유를 써도 이성적으로 다 쳐낸다. 심지어 나보고 도망가지 말고 가만히 서 있으라고 곤봉으로 허벅지를 톡톡 치신다.' }
          ],
          logs: [
            '개인 일기: 오늘도 가만히 있는 것에 실패해 로르샤흐 부서 상담실 화분을 세 개나 쓰러뜨렸다. 내 알 바는 아니지만.',
            '기만 전술 보고: 적대 현상체들에게 아군 경로를 오도하는 거짓 표지판을 심어서 완전히 혼란에 빠뜨린 후, 톤파 콤보로 기절시킴.'
          ]
        }
      },
      { 
        id: 'member-4', 
        title: '베이머', 
        description: '소속 요원',
        profile: {
          gender: '女',
          department: '벤더 게슈탈트 부서',
          weapon: '곤봉',
          personalityKeywords: ['차분한', '이성적인', '효율중시'],
          features: [
            '별을 바라보는 것을 좋아함',
            '비유와 은유를 자주 사용함',
            '범죄자에 대한 무조건적인 혐오'
          ],
          relationships: [
            { name: '라비린스', relation: '부서 동료 / 체크 요망', description: '라비린스는 밝고 좋은 대원이지만, 가끔 징계부 시절의 그 과격한 파괴 본능이 불쑥 튀어나올 때가 있어서 시선이 간다.' },
            { name: '미노', relation: '부서 동료 / 강제로 고정하고 싶음', description: '계속 몸을 움직이는 현상은 이성적이지 못하다. 남을 기만하는 언동 또한 효율을 심각하게 갉아먹는다. 하지만 전투력만큼은 확실한 계산 하에 실행된다.' }
          ],
          logs: [
            '관측 기록: 어젯밤 옥상에서 성운을 관측했다. 우주는 참 효율적이고 차가워서 마음에 된다.',
            '현장 조치: 범죄 성향을 나타내는 반인륜적 현상체를 마주하여, 가차 없는 효율 중시 타격으로 30초 만에 완벽 진압.'
          ]
        }
      }
    ]
  },
  { 
    id: 'dep-thematic', 
    title: '주제통각 정보부', 
    description: '정신 공간 인지 재해 집행부 내부의 정보를 정리하는 부서. 커피를 달고 산다.', 
    color: '#C6A34F',
    subContent: [
      { id: 'member-1', title: '슈와므', description: '소속 요원' },
      { id: 'member-2', title: '하레노이', description: '소속 요원' },
      { id: 'member-3', title: '쟌', description: '소속 요원' },
      { id: 'member-4', title: '이노', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-rorschach', 
    title: '로르샤흐 부서', 
    description: '정신 공간 인지 재해 집행부 내부의 상담을 담당하는 부서이자 침잠으로 개방된 자아심도를 담당한다. 자아심도 내부의 현상체와 상호작용 하여 드림 코어로 접근한다.', 
    color: '#FEF08A',
    subContent: [
      { id: 'member-1', title: '티란', description: '소속 요원' },
      { id: 'member-2', title: '데시마', description: '소속 요원' },
      { id: 'member-3', title: '르셰', description: '소속 요원' },
      { id: 'member-4', title: '아즈와', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-htp', 
    title: 'H.T.P 부서', 
    description: '예술가들로 이루어진 부서. 자아심도 내부의 배경을 분석하여 어느 감정들이 섞여 만들어진 자아심도인지를 추론해 드림 코어로 한결 수월하게 접근한다.', 
    color: '#A855F7',
    subContent: [
      { id: 'member-1', title: '호넷', description: '소속 요원' },
      { id: 'member-2', title: '스카라무슈', description: '소속 요원' },
      { id: 'member-3', title: '트리비아', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-wais-wisc', 
    title: 'WAIS, WISC 부서', 
    description: '보통 \'웩슬러 부서\' 또는 \'쌍둥이 부서\'라고 불린다. 본래 떨어져있던 두 부서가 통합된 것으로, 초자아 또는 이드를 담당한다.', 
    color: 'mint-black',
    subContent: [
      { id: 'member-1', title: '이혜인', description: '소속 요원' },
      { id: 'member-2', title: '이다인', description: '소속 요원' },
      { id: 'member-3', title: '베니', description: '소속 요원' },
      { id: 'member-4', title: '바이스', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-superego', 
    title: '초자아 징계부', 
    description: '정신 공간 인지 재해 집행부 내부의 질서를 바로잡는 부서. 자아심도를 받아들여 장신구가 있는 자들로 구성된다.', 
    color: '#991B1B',
    subContent: [
      { id: 'member-1', title: '마우그리스', description: '소속 요원' },
      { id: 'member-2', title: '캐러독', description: '소속 요원' },
      { id: 'member-3', title: '로베이라', description: '소속 요원' },
      { id: 'member-4', title: '막야', description: '소속 요원' }
    ]
  },
  { 
    id: 'dep-sigmund', 
    title: '지그문트 부서', 
    description: '새로 창설된 부서. 포괄적인 업무를 담당받는다.', 
    color: '#FFFFFF',
    subContent: [
      { id: 'member-1', title: '태아', description: '소속 요원' },
      { id: 'member-2', title: '마거릿', description: '소속 요원' },
      { id: 'member-3', title: '독타', description: '소속 요원' }
    ]
  }
];

export const EMOTIONS: LoreEntry[] = [
  { 
    id: 'guilt', 
    title: '죄책감', 
    description: '좁고 긴 복도', 
    example: '복도는 지나치게 좁았어. 숨을 들이쉴 때마다 벽이 조금씩 가까워지는 기분이 들었지.', 
    color: 'rgba(128, 128, 128, 0.4)',
    profile: {
      features: [
        '압박감과 정체감을 가진다',
        '쉽게 떠날 수 있지만 떠나선 안 될 것 같은 느낌이 수시로 든다',
        '죄책감의 공간은 과거의 흔적이나 사용감이 남아있다',
        '소리, 발자국, 숨소리 등이 비정상적으로 크게 느껴진다',
        '빛이 희미하거나 불완전하다'
      ]
    }
  },
  { 
    id: 'anger', 
    title: '분노', 
    description: '화염', 
    example: '불길은 무언가를 태우기 위해 존재하는 게 아니었어. 그저 멈추지 못한 채 타오르고 있었지.', 
    color: 'rgba(220, 38, 38, 0.4)',
    profile: {
      features: [
        '공간은 날카롭고 공격적인 구조를 가진다',
        '붉거나 과열된 색감, 금속성 질감, 깨진 구조물 등이 나타난다',
        '만져도 뜨겁지 않은 불길이 있다',
        '불안정한 소리(진동, 파열음, 금속 마찰음 등)가 반복된다',
        '억눌린 폭발 직전의 분위기를 풍긴다',
        '무언가 부서졌거나 부서질 것 같은 긴장감이 계속해서 느껴진다'
      ]
    }
  },
  { 
    id: 'loss', 
    title: '상실', 
    description: '새하얀 방안, 검은 소파 두 개', 
    example: '새하얀 방 안에는 서로를 마주보는 소파 두 개만 있었어. 하지만 그 어디에도 사람은 없었지.', 
    color: 'noise',
    profile: {
      features: [
        '공간은 비어있거나 지나치게 넓게 느껴진다',
        '누군가 있었던 흔적만 남아있다',
        '소리는 멀고 희미하며 공허하게 퍼진다',
        '이미 끝난 장소 같은 분위기를 가진다',
        '부재감이 남아있다'
      ]
    }
  },
  { 
    id: 'obsession', 
    title: '집착', 
    description: '무한 반복 복도', 
    example: '몇 번을 걸어도 같은 문, 같은 조명, 같은 발소리였어.', 
    color: 'rgba(239, 68, 68, 0.2)',
    profile: {
      features: [
        '동일한 구조나 사물이 반복된다',
        '특정 대상이나 장소가 과하게 강조된다',
        '반복되는 듯한 느낌이 든다',
        '정돈되어 있으나 비정상적으로 강박적이다',
        '시선이 붙잡히는 특정 요소가 있다'
      ]
    }
  },
  { 
    id: 'fear', 
    title: '공포', 
    description: '어둠', 
    example: '아무것도 보이지 않았어. 그런데 분명 어딘가에서 숨소리가 들려왔지. 문제는 방향조차 알 수 없다는 거야.', 
    color: 'rgba(147, 51, 234, 0.2)',
    profile: {
      features: [
        '시야가 제한되거나 구조가 불분명하다',
        '인기척과 침묵이 반복된다',
        '무언가 가까이 있는 듯하지만 명확히 보이지 않는다',
        '안전지대가 존재하지 않는 느낌이 든다',
        '어둠 속 방향이 특정되지 않는 곳에서 소리가 들려온다'
      ]
    }
  },
  { 
    id: 'love', 
    title: '사랑', 
    description: '체온이 남은 공간', 
    example: '누군가는 이미 떠났는데도 방 안은 아직 따뜻했어.', 
    color: 'rgba(244, 114, 182, 0.2)',
    profile: {
      features: [
        '따뜻함과 불안정함을 동시에 가진다',
        '부드러운 빛, 체온, 숨결 같은 감각 등이 강조되어 느껴진다',
        '가까워지고 싶은 충동을 느낀다',
        '공간은 편안하지만 동시에 잃을까 두려운 분위기를 풍긴다',
        '누군가의 흔적이 살아있는 형태로 남아있다'
      ]
    }
  },
  { 
    id: 'sadness', 
    title: '슬픔', 
    description: '비와 회색빛 거리', 
    example: '회색 도시 위로 비가 내리고 있었어. 누구도 하늘을 올려다보진 않았지.', 
    color: 'rgba(59, 130, 246, 0.2)',
    profile: {
      features: [
        '가라앉은 듯한 분위기를 가진다',
        '빛과 소리가 희미하게 눌려 있다',
        '비, 먼지, 흐린 공기 같은 요소가 자주 나타난다',
        '공간은 움직임보다 정지를 우선한다',
        '이미 오래 침전된듯한 느낌을 준다'
      ]
    }
  },
  { 
    id: 'sorrow', 
    title: '비애', 
    description: '어두운 바다', 
    example: '바다는 너무 검어서 깊이조차 보이지 않았어.', 
    color: 'rgba(30, 58, 138, 0.2)',
    profile: {
      features: [
        '체념과 아름다움이 섞여 있다(강조 되기도 한다)',
        '공간은 무너졌으나 어딘가 아름답다',
        '끝났음을 알고 있음에도 시선을 떼기 어렵다',
        '조용한 붕괴의 분위기를 유지한다',
        '사라짐 자체가 공간 일부처럼 느껴진다'
      ]
    }
  },
  { 
    id: 'loneliness', 
    title: '고독', 
    description: '텅 빈 도시', 
    example: '도시에는 삶의 흔적이 있었지만, 아무 목소리도 들리지 않았지.', 
    color: 'rgba(55, 65, 81, 0.2)',
    profile: {
      features: [
        '지나치게 넓거나 지나치게 고립되어 있다',
        '존재감이 희박하다',
        '소리는 멀리서만 들린다',
        '혼자라는 감각이 공간 구조 자체에 녹아 있다',
        '연결보다 단절된 듯 느껴진다'
      ]
    }
  },
  { 
    id: 'regret', 
    title: '후회', 
    description: '한 장면만 반복되는 영화관', 
    example: '스크린 속 사람은 같은 말을 끝없이 반복하고 있었어.', 
    color: 'rgba(100, 116, 139, 0.2)',
    profile: {
      features: [
        '과거의 흔적을 반복적으로 보여준다',
        '이미 지나간 선택의 흔적이 남아있다',
        '같은 장소를 맴도는 구조가 나타날 수 있다',
        '시간은 앞으로 흐르지 못한 느낌을 준다',
        '돌이킬 수 없다는 감각을 포함한다'
      ]
    }
  },
  { 
    id: 'hatred', 
    title: '증오', 
    description: '금이 간 거울이 가득한 공간', 
    example: '거울 속 얼굴은 전부 조금씩 망가져 있었지.', 
    color: 'rgba(127, 29, 29, 0.3)',
    profile: {
      features: [
        '공간은 공격성과 냉혹함을 가진다',
        '타인(자아심도에 들어온 프시케 등)을 배척하는 구조를 가진다',
        '날카로운 형태와 차가운 질감이 강조된다',
        '파괴 충동과 적대감이 스며 있다',
        '타인(자아심도에 진입한 프시케 등)의 존재 자체를 거부하는 분위기를 가진다'
      ]
    }
  },
  { 
    id: 'hope', 
    title: '희망', 
    description: '아주 멀리 있는 빛', 
    example: '닿을 수 있을지조차 모르겠지만, 사람은 결국 저 빛을 향해 걷게 되더라.', 
    color: 'rgba(234, 179, 8, 0.2)',
    profile: {
      features: [
        '어둠 속에서도 방향성이 존재한다',
        '완전한 절망은 없다',
        '멀리 있는 빛, 출구, 새벽 같은 요소가 나타난다',
        '아직 끝나지 않았다는 감각이 느껴진다',
        '공간은 불완전하지만 앞으로 나아가려는 성질을 가진다'
      ]
    }
  },
  { 
    id: 'greed', 
    title: '탐욕', 
    description: '끝이 보이지 않는 구덩이', 
    example: '아래를 내려다봤지만 바닥은 보이지 않았어.', 
    color: 'rgba(198, 163, 79, 0.2)',
    profile: {
      features: [
        '공간은 과잉과 축적의 흔적을 가진다',
        '필요 이상으로 많은 것들이 쌓여 있다',
        '공간은 화려하지만 숨막히는 느낌이 든다',
        '더 가지려는 욕망이 끝없이 반복된다',
        '만족보다 결핍이 느껴진다'
      ]
    }
  },
  { 
    id: 'nostalgia', 
    title: '향수', 
    description: '체취가 남은 공간', 
    example: '오래전에 잊었다고 생각했던 냄새가 아직 공간에 남아 있었지.', 
    color: 'rgba(254, 252, 232, 0.3)',
    profile: {
      features: [
        '공간은 오래된 기억처럼 흐릿하다',
        '과거의 분위기가 현재보다 강하게 남아있다',
        '낡은 냄새, 오래된 소리, 빛바랜 색감이 강조된다',
        '돌아갈 수 없는 시간의 느낌을 포함한다',
        '따뜻함과 슬픔이 함께 존재한다'
      ]
    }
  },
  { 
    id: 'sloth', 
    title: '나태', 
    description: '멈춰버린 시계탑', 
    example: '시간은 멈춘 게 아니었어. 그저 흐르길 거부하고 있을 뿐이었지.', 
    color: 'rgba(234, 179, 8, 0.2)',
    profile: {
      features: [
        '공간은 움직임을 거부하는 분위기를 가진다',
        '솟아난 손아귀들이 끌어당기려 한다',
        '공기 자체가 무겁고 느리게 느껴진다',
        '시간의 흐름이 늘어진다',
        '변화보다 정체를 유도한다'
      ]
    }
  },
  { 
    id: 'ennui', 
    title: '권태', 
    description: '색이 바랜 정원', 
    example: '아름다웠을 꽃들은 이제 아무런 감흥도 주지 못한 채 시들어 있었지.', 
    color: 'rgba(161, 161, 170, 0.2)',
    profile: {
      features: [
        '반복과 무감각을 강조한다',
        '모든 것이 익숙하게 느껴진다(데자뷔)',
        '동일한 구조가 끝없이 이어질 수 있다',
        '감각 자극이 희미하고 무미건조하다',
        '살아있다는 감각이 둔해진다'
      ]
    }
  },
  { 
    id: 'jealousy', 
    title: '질투', 
    description: '어긋난 조각들', 
    example: '그것이 내 것이어야만 했다는 생각이 머릿속을 독처럼 파고들었어.', 
    color: 'rgba(147, 51, 234, 0.2)',
    profile: {
      features: [
        '비교와 결핍이 느껴진다',
        '손에 닿지 않는 무언가가 시야에 존재한다',
        '타인(대표적으론 자아심도의 주인)의 흔적이 과하게 의식된다',
        '아름답지만 불쾌한 감각을 동반한다',
        '자신에게 없는 것을 계속 인식하게 만든다'
      ]
    }
  },
  { 
    id: 'anxiety', 
    title: '불안', 
    description: '바닥이 보이지 않는 계단', 
    example: '다음 발을 내디딜 때 그곳에 바닥이 있을지 확신할 수 없었어.', 
    color: 'rgba(139, 126, 126, 0.2)',
    profile: {
      features: [
        '공간은 안정적으로 유지되지 않는다',
        '미세한 흔들림이나 이상 현상이 반복된다',
        '무엇이 어디서부터 잘못되었는지 명확하지 않다',
        '익숙한 장소도 어딘가 어긋나 있다',
        '긴장이 계속 해소되지 않는다'
      ]
    }
  },
  { 
    id: 'attachment', 
    title: '애착', 
    description: '엉켜버린 붉은 실', 
    example: '끊어내려 할수록 실은 살을 파고들며 더욱 단단히 묶여왔지.', 
    color: 'rgba(236, 72, 153, 0.2)',
    profile: {
      features: [
        '공간은 특정 존재의 흔적을 강하게 품고 있다',
        '떠나기 어렵게 만드는 정서적 연결감이 느껴진다',
        '작은 사물 하나에도 의미가 남아있다',
        '공간 자체가 기억 보관소처럼 느껴질 수 있다',
        '상실에 대한 두려움을 함께 포함한다'
      ]
    }
  },
  { 
    id: 'self-loathing', 
    title: '자기혐오', 
    description: '깨진 거울 밑바닥', 
    example: '거울 속에 비친 것은 도저히 사랑할 수 없는 무언가의 파편이었어.', 
    color: 'rgba(0, 0, 0, 0.3)',
    profile: {
      features: [
        '공간은 자신을 압박하고 깎아내리는 방향으로 작동한다',
        '거울, 그림자, 반사체 등이 왜곡되어 나타날 수 있다',
        '숨기고 싶은 부분(과거)을 계속 의식하게 만든다',
        '안전함보다 불쾌한 자기인식을 강화한다',
        '도망쳐도 자신에게서 벗어날 수 없는 느낌을 준다'
      ]
    }
  },
  { 
    id: 'craving', 
    title: '갈망', 
    description: '마를 줄 모르는 샘물', 
    example: '마실수록 목마름은 더해졌고, 갈증은 영혼까지 태워버릴 듯했지.', 
    color: 'rgba(249, 115, 22, 0.2)',
    profile: {
      features: [
        '공간은 닿을 수 없는 무언가를 암시한다',
        '멀리 있는 빛, 문, 사람, 소리 등이 반복적으로 등장할 수 있다',
        '가까워질 듯하지만 완전히 도달하진 못한다',
        '결핍과 희망이 동시에 존재한다',
        '공간은 계속 앞으로 나아가게 만든다'
      ]
    }
  }
];
