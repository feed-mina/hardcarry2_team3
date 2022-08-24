DROP TABLE IF EXISTS `oneto100`.`back_test`;

CREATE TABLE `oneto100`.`back_test` (
                                        `type_id`	VARCHAR(20)	NOT NULL,
                                        `type_name`	VARCHAR(50)	NOT NULL,
                                        `type_from` 	VARCHAR(50)	NOT NULL,
                                        `type_desc`	VARCHAR(500) NOT NULL,
                                        `type_program`	VARCHAR(500) NOT NULL,
                                        `type_img`	VARCHAR(5000) NOT	NULL,
                                        `type_program_img`	VARCHAR(5000) NOT	NULL,
                                        `type_like`	VARCHAR(20) NOT	NULL,
                                        `type_like_sub`	VARCHAR(100) NOT	NULL,
                                        `type_dislike`	VARCHAR(20) NOT	NULL,
                                        `type_dislike_sub`	VARCHAR(100) NOT	NULL,
                                        `type_attend`	INT	NOT NULL DEFAULT 0,
                                        PRIMARY KEY (type_id)
);

#back_test
#"gihun", "chulsoo", "junha", "ryuhwan", "yongnam", "kwangsoo"


INSERT INTO `oneto100`.`back_test`
(`type_id`,
 `type_name`,
 `type_from`,
 `type_desc`,
 `type_program`,
 `type_img`,
 `type_program_img`,
 `type_like`,
 `type_like_sub`,
 `type_dislike`,
 `type_dislike_sub`,
 `type_attend`)
VALUES
    ('ryuhwan',
     '능력 만땅 ‘류환’',
     '은밀하게 위대하게',
     '‘류환’은 북한 최고 엘리트 요원이지만, 정체를 숨기고 동네 바보이자 백수로 살고 있어. 북한에서 전달되는 명령이 없어도, 원대한 사명을 안고 임무를 충실히 수행하고 있지. 너도 류환처럼 능력을 숨기고 있는 것 같은데, 이제는 숨기지 말고 보여주자! ‘모두가 하드캐리’에서 네 직무 능력과 관심을 보여여줄 자신이 있다면, 다른 직무의 사람들과 멋진 결과물을 만들 수 있을 거야.',
     '능력 만땅인 너와 잘 어울리는 프로그램: 모두가 하드캐리',
     's3://oneto100/oneto100/ryuhwan.png',
     'program_img',
     'yongnam',
     '남한 최고..는 아니지만 전사 ‘용남’',
     'junha',
     '호락호락하지 않은 (진짜) 바보 ‘준하’',
     0);

INSERT INTO `oneto100`.`back_test`
(`type_id`,
 `type_name`,
 `type_from`,
 `type_desc`,
 `type_program`,
 `type_img`,
 `type_program_img`,
 `type_like`,
 `type_like_sub`,
 `type_dislike`,
 `type_dislike_sub`,
 `type_attend`)
VALUES
    ('gihun',
     '믿음 만땅 ‘기훈’',
     '오징어게임',
     '‘기훈’은 실직 후 456억 원이 걸린 게임에서 우승하는 캐릭터지. 말도 안 되는 게임에서 그가 우승할 수 있었던 이유는 사람에 대한 믿음 아닐까? 너도 자신과 타인에 대한 믿음이 강해 보이는데, 이 믿음을 바탕으로 ‘미니인턴’에 참여해보는 건 어때? 혹시 모르지.. 기업 담당자가 믿음으로 똘똘 뭉친 네 기획서를 마음에 들어 할지도?!',
     '믿음 만땅인 너와 잘 어울리는 프로그램: 미니인턴',
     's3://oneto100/oneto100/gihun.png',
     'program_img',
     'junha',
     '인간미 넘치는 사람을 좋아하는 ‘준하’',
     'kwangsoo',
     '꿈에 대한 노력이 조금은 더 필요한 ‘광수’',
     0);

INSERT INTO `oneto100`.`back_test`
(`type_id`,
 `type_name`,
 `type_from`,
 `type_desc`,
 `type_program`,
 `type_img`,
 `type_program_img`,
 `type_like`,
 `type_like_sub`,
 `type_dislike`,
 `type_dislike_sub`,
 `type_attend`)
VALUES
    ('yongnam',
     '주도력 만땅 ‘용남’',
     '엑시트',
     '자신을 보며 창피해하는 조카, 산악 동아리가 취업에 무슨 소용이냐며 구박하는 누나. 영화 엑시트에서는 ‘용남’의 자존감을 끌어내리는 사람들이 등장하지. 하지만 자신만이 할 수 있고, 해야 하는 행동을 취해 신뢰를 얻게 되잖아? 용남처럼 주도적인 면모를 지닌 너에게 직무 역량을 쌓을 수 있는 ‘D시리즈’를 추천할게. 현직자 멘토와 함께 완성해가는 프로그램이니까 배울 점이 많을 거야.',
     '주도력 만땅인 너와 잘 어울리는 프로그램: D시리즈',
     's3://oneto100/oneto100/yongnam.png',
     'program_img',
     'ryuhwan',
     '남한 최고..는 아니지만 전사 ‘용남’',
     'gihun',
     '이런 파이팅이 부담스러운 ‘기훈’',
     0);

INSERT INTO `oneto100`.`back_test`
(`type_id`,
 `type_name`,
 `type_from`,
 `type_desc`,
 `type_program`,
 `type_img`,
 `type_program_img`,
 `type_like`,
 `type_like_sub`,
 `type_dislike`,
 `type_dislike_sub`,
 `type_attend`)
VALUES
    ('junha',
     '긍정 만땅 ‘준하’ ',
     '거침없이 하이킥',
     '둥글둥글 순한 성격으로 모두와 살갑게 지내는 거침없이 하이킥의 ‘준하’. 매사에 긍정적이지만, 일찍 명예퇴직을 당해 백수로 지내고 있어. 너도 앞으로 무엇을 해야 할지 고민이구나? 직업 선택 전에 조금 더 너를 알고 싶다면, ‘제로베이스’에 참여해보자! 너의 장점인 긍정적인 태도로 상담 프로그램을 진행해보면 분명 너를 더 잘 이해할 수 있을 거야.',
     '주도력 만땅인 너와 잘 어울리는 프로그램: 제로베이스',
     's3://oneto100/oneto100/junha.png',
     'program_img',
     'gihun',
     '누구든지 믿어줄 준비가 되어 있는 ‘기훈’',
     'kwangsoo',
     '소리치는 걸 좋아하는 ‘광수’',
     0);


INSERT INTO `oneto100`.`back_test`
(`type_id`,
 `type_name`,
 `type_from`,
 `type_desc`,
 `type_program`,
 `type_img`,
 `type_program_img`,
 `type_like`,
 `type_like_sub`,
 `type_dislike`,
 `type_dislike_sub`,
 `type_attend`)
VALUES
    ('kwangsoo',
     '꿈 만땅 ‘광수’',
     '지붕 뚫고 하이킥',
     '가수를 꿈꾸지만, 오디션을 보거나 기획사 대표님을 찾아가는 등 적극적인 모습은 보이지 않는 지붕 뚫고 하이킥의 ‘광수’.. 하지만 오락가락하는 주식시장에서 386% 수익률을 챙겨 3개월 치 밀린 방세를 내기도 했어. 광수처럼, 너 자신도 모르고 있는 재능이 숨겨져 있을지도 몰라! 그림책 독서, 오일파스텔 드로잉 등 다양한 프로그램으로 너를 알아가는 ‘아무튼, 기대’를 추천할게. 이루고 싶은 꿈을 염두에 두고 참여하면, 조금 더 너다운 내일을 만들어 나갈 수 있을 거야!',
     '꿈 만땅인 너와 잘 어울리는 프로그램: 아무튼, 기대',
     's3://oneto100/oneto100/kwangsoo.png',
     'program_img',
     'chulsoo',
     '특유의 느긋함으로 사람들의 고민을 해결해주는 ‘철수’ ',
     'junha',
     '소리 지르는 걸 무서워하는 ‘준하’',
     0);



INSERT INTO `oneto100`.`back_test`
(`type_id`,
 `type_name`,
 `type_from`,
 `type_desc`,
 `type_program`,
 `type_img`,
 `type_program_img`,
 `type_like`,
 `type_like_sub`,
 `type_dislike`,
 `type_dislike_sub`,
 `type_attend`)
VALUES
    ('chulsoo',
     '공감 만땅 ‘철수’',
     '별에서 온 그대',
     '만화방에서 거의 살다시피 하는 백수 ‘철수’. 만화책에 과몰입하는 모습들이 한심해 보일 수도 있지만, 사람들의 고민을 진지하게 듣고 조언을 해주는 따뜻한 캐릭터야. 공감 능력이 뛰어난 너에게는 ‘이루디 스터디’가 잘 어울린다! 직무 특강도 듣고, 사람들과 직무 스터디도 할 수 있거든. 특강과 스터디 모두 공감을 바탕으로 이루어질 때 가장 효과적이지. 너라면 즐겁게 참여할 수 있을 것 같아.',
     '공감 만땅인 너와 잘 어울리는 프로그램: 이루디 스터디',
     's3://oneto100/oneto100/chulsoo.png',
     'program_img',
     'kwangsoo',
     '누군가 자신에게 주목해줄 때 가장 행복한 ‘광수’',
     'ryuhwan',
     '자신만의 루틴이 딱딱 정해져 있는 계획형 ‘류환’ ',
     0);
