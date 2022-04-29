const btn = document.querySelector('.fireButton');
const icon = document.querySelector('.fireSuccess > i');
const iconEnemy = document.querySelector('.fireSuccess1 > i');
const firep = document.querySelector('.fireSuccess > p');
const fireEnemy = document.querySelector('.fireSuccess1 > p');
const spaceShipImage = document.querySelector('.playerImage')
const enemyImage = document.querySelector('.enemyImage');
const enemyHull = document.querySelector('#enemyHull');
const enemyShip = document.querySelector('#enemyShip')
const enemyFire = document.querySelector('#enemyFire');
const playerHull = document.querySelector('#playerHull')
const enemyAccucary = document.querySelector('#enemyAccucary')

let EnemyShips = Array.from({length: 6}, () => Math.floor(Math.random() * 4)+3);
let EnemyShipsFire = Array.from({length: 6}, () => Math.floor(Math.random() * 3)+ 2 );
let EnemyShipsAccuracy = Array.from({length: 6}, () => (Math.floor(Math.random() * 3)+ 6)/10 );
let spaceShipHull = 20;
let currentShip = 0;
 function enemyAttack(){
    if(Math.random() < EnemyShipsAccuracy[currentShip]){
        spaceShipHull -= EnemyShipsFire[currentShip];
        if(spaceShipHull <=0){
            alert("Enemy Just Destroyed You \n Let's try again!")
            window.location.reload()
        }
        iconEnemy.classList.replace('hide','visible');
        fireEnemy.textContent = `Enemy hit the you with ${EnemyShipsFire[currentShip]} power \n remainin Hull: ${spaceShipHull}`;
        fireEnemy.classList.replace('hide','visible');
        spaceShipImage.style.backgroundImage = 'none';
        setTimeout(function(){
            iconEnemy.classList.replace('visible','hide');
            fireEnemy.classList.replace('visible','hide');
            spaceShipImage.style.backgroundImage = 'url("images/space_hero.gif")'
            playerHull.textContent = `${spaceShipHull}`
            },2000);
    }
    else{
        fireEnemy.textContent = "Enemy Just Missed :)"
        fireEnemy.classList.replace('hide','visible');
        spaceShipImage.style.backgroundImage = 'none';
        setTimeout(function(){
            fireEnemy.classList.replace('visible','hide');
            spaceShipImage.style.backgroundImage = 'url("images/space_hero.gif")'
        },2000);
    }
 }
function enemyDisplay() {
    enemyShip.textContent = `${currentShip+1}nth Ship`
    enemyHull.textContent = `${EnemyShips[currentShip]}`;
    enemyFire.textContent = `${EnemyShipsFire[currentShip]}`;
    enemyAccucary.textContent = `${EnemyShipsAccuracy[currentShip]}`;
}
enemyDisplay()
btn.addEventListener('click', event => {
    let number = Math.random()
    
    if(number<0.7){
	        if(EnemyShips[currentShip]>0){
    	        EnemyShips[currentShip]-=5;
                if(EnemyShips[EnemyShips.length-1]<0){
                    alert("You just hit all the ships \n Good job go to next duty")
                    window.location.reload()
                }
                if(EnemyShips[currentShip]<=0){
        	        icon.classList.replace('fa-bomb','fa-skull-crossbones')
                    icon.classList.replace('hide','visible')
                    firep.textContent = "You Just Destroyed "+(currentShip+1)+"nth WarSheep";
                    firep.classList.replace('hide','visible');
                    enemyImage.style.backgroundImage = 'none';
                    enemyShip.textContent = `${currentShip+2}nth Ship`
                    enemyHull.textContent = `${EnemyShips[currentShip+1]}`;
                    setTimeout(function(){
                        icon.classList.replace('visible','hide');
                        firep.classList.replace('visible','hide');
                        enemyImage.style.backgroundImage = 'url("images/enemy.gif")'
                    },1500);
                
                    currentShip++;            
                    enemyDisplay()
                
                }
                else if(EnemyShips[currentShip]>0){
                    setTimeout(function(){
                        enemyAttack()
                    },2000);
                    icon.classList.replace('hide','visible');
                    icon.classList.replace('fa-skull-crossbones','fa-bomb')
                    firep.textContent = "You hit the target";
                    firep.classList.replace('hide','visible');
                    enemyImage.style.backgroundImage = 'none';
                    enemyShip.textContent = `${currentShip+1}nth Ship`
                    enemyHull.textContent = `${EnemyShips[currentShip]}`;
                    setTimeout(function(){
                    icon.classList.replace('visible','hide');
                    firep.classList.replace('visible','hide');
                    enemyImage.style.backgroundImage = 'url("images/enemy.gif")'
                    },1000);
                    }
                
                
                
            }
    }      
    else{
        setTimeout(function(){
            enemyAttack()
        },1000);
        firep.textContent = "You Just Missed :("
        firep.classList.replace('hide','visible');
        enemyImage.style.backgroundImage = 'none';
        setTimeout(function(){
            firep.classList.replace('visible','hide');
            enemyImage.style.backgroundImage = 'url("images/enemy.gif")'
        },1000);
    }
})
