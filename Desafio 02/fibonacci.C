//Existem maneiras mais otimizadas de realizar esse exercício ;)

#include<stdio.h>
#include<stdlib.h>

    
int isFibonacci(int valueToSearch){

    int fibo0 = 1;
    int fibo1 = 1;
    int temp = 0;

    while(temp < valueToSearch){
        temp = fibo0 + fibo1;
        fibo0 = fibo1;
        fibo1 = temp;
    }

    if(valueToSearch == temp){
        return 1;
    }else{
        return 0;
    }

}


int main(void){

    int valueToSearch;


    printf("Enter with value to search: ");
    scanf("%d",&valueToSearch);

    if(isFibonacci(valueToSearch) == 1){
        printf("the number belongs to fibonacci sequence");
    }else{
        printf("The number dont belong to fibonacci sequence");
    }
    

    return 0;
}
