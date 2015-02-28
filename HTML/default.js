jQuery(function($){
	var $gnbBtn = $ (".gnb>button");
	/* 	var=변수 설정, 성능 차이도 존재 */
	
	$gnbBtn.on("click", function(){
		// $(".gnb>ul").slideToggle(200);는 하단의 명령어와 같다. this는 ".gnb>button을 의미한다."
		$(this).next("ul").slideToggle(200);
	
			/*if ( $(".gnb>button").is(":hidden") ){*/
			// 위의 if문 의미: gnb의 ul의 디스플레이가 닫혀(블럭 상태) 있으면,
		
		if ( $gnbBtn.text() === "메뉴 열기" ) {
			/*메뉴 닫기 텍스트 표시*/
			$gnbBtn.text("메뉴닫기");
		} else {
			/*메뉴열기 텍스트 표시*/
			$gnbBtn.text("메뉴열기");
		}
	})
});
/* 1) jQuery(function($){
	s("CSS 위치").on("action", function(){})
	});
	2) jquery가 없으면... if(메뉴가 닫혀 있으면) {메뉴열기} else if (메뉴가 열려 있으면) {메뉴닫기} 처럼 표시되야 함
	3) slideToggle(), toggle은 해당 기능을 클릭하면, 메뉴가 열리고 닫히는 기능임, 슬라이드 토글은 디폴트값은 400이다.
	이 의미는 0.4초간 해당 기능이 보여짐을 의미한다.*/