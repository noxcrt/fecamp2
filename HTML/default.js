jQuery(function($){
/* 모바일 GNB 토글 버튼*/
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
	});
	/* 1) jQuery(function($){
	s("CSS 위치").on("action", function(){})
	});
	2) jquery가 없으면... if(메뉴가 닫혀 있으면) {메뉴열기} else if (메뉴가 열려 있으면) {메뉴닫기} 처럼 표시되야 함
	3) slideToggle(), toggle은 해당 기능을 클릭하면, 메뉴가 열리고 닫히는 기능임, 슬라이드 토글은 디폴트값은 400이다.
	이 의미는 0.4초간 해당 기능이 보여짐을 의미한다.*/

/* 2014.03.05 수업 내용 */
/* 태블릿+데스크톱 GNB메뉴 */
	$(".gnb>ul>li>a").on("mouseover focus",function(){
		$(this).parent().addClass("active").siblings().removeClass("active");
		/* 1) $(this).parent() = this('a')의 부모(parent='li')를 선택
		2) siblings는 형제 노드를 선택
		3) focus를 써줘야 키보드로도 가능하다.
		경로를 설정할 때 $(".gnb>ul>li>a")가 아닌 $(".gnb>ul>li")을 이용해도 마우스 오버시 기능하나,
		키보드는 'a'와 같은 요소만 인식하기 때문에 사용해서는 안된다. */
	});
});
