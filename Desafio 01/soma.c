//O primeiro problema resolvi na minha li9nguagem favorita que é C
// resultado da soma = 91


#include <stdio.h>
#include <stdlib.h>

int main(void){

    int indice = 13;
    int soma = 0;
    int k = 0;

    while(k < indice){
        k = k + 1;
        soma = soma + k;
    }

    printf("%d",soma);
    return 0;
} 


