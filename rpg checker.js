<script type="text/javascript">
		$("button").on('click', function() {
			$("#result").empty();
			checkStats();
		});

		function checkStats() {
			let charArray = [{}, {}, {}, {}];

			for (let i = 0; i < 4; i++) {
				charArray[i].index = i;
				charArray[i].name = $("#name_" + i).val();
				charArray[i].hp = parseInt($("#hp_" + i).val());
				charArray[i].attack = parseInt($("#attack_" + i).val());
				charArray[i].counter = parseInt($("#counter_" + i).val());
			}

			for (let i = 0; i < 4; i++) {
				let resultArr = [];
				
				checkAllEnemies([], charArray[i], charArray[i].attack);

				// debugger;
				if (resultArr.length > 0) {
					for (let j = 0; j < resultArr.length; j++) {
						$("#result").append(charArray[i].name + " can win by fighting in this order: "
							+ charArray[resultArr[j][0]].name + ", "
							+ charArray[resultArr[j][1]].name + ", "
							+ charArray[resultArr[j][2]].name + "<br/>");
					}
					if (resultArr.length == 6) {
						$("#result").append("<b>(" + charArray[i].name + " cannot lose!)</b><br/>");
					}
				}
				else {
					$("#result").append("<b>" + charArray[i].name + " cannot win.</b><br/>");
				}

				$("#result").append("<br/>");

				function checkAllEnemies(indexArr, player, atkpwr) {
					// debugger;
					let currentIndexArr;
					let currentPlayer;
					let currentAtkPwr;

					for (let i = 0; i < 4; i++) {
						currentIndexArr = indexArr.slice();
						currentPlayer = $.extend(true, {}, player);
						currentAtkPwr = atkpwr;

						if ((i != currentPlayer.index) && (currentIndexArr.indexOf(i) == -1)) {
							if (doBattle(charArray[i])) {
								currentIndexArr.push(i);
								if (currentIndexArr.length > 2) {
									resultArr.push(currentIndexArr);
								}
								else {
									checkAllEnemies(currentIndexArr, currentPlayer, currentAtkPwr);
								}
							}
						}
					}

					function doBattle(enemy) {
						// debugger;
						let tempPlayer = $.extend(true, {}, currentPlayer);
						let tempEnemy = $.extend(true, {}, enemy);
						let tempPlayerAtkPwr = currentAtkPwr;
						
						while (tempEnemy.hp > 0 && tempPlayer.hp > 0) {
							tempEnemy.hp -= tempPlayerAtkPwr;
							tempPlayerAtkPwr += currentPlayer.attack;

							if (tempEnemy.hp <= 0) {
								currentPlayer = tempPlayer;
								currentAtkPwr = tempPlayerAtkPwr;
								return true;
							}
							
							tempPlayer.hp -= tempEnemy.counter;
							
							if (tempPlayer.hp <= 0) { return false; }
						}
					}
				}
			}
		}
	</script>