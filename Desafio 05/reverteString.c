#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void inverter(char vet[]) {
    int i, aux, fim, tam = strlen(vet);
    fim = tam - 1;

    for (i = 0; i < tam / 2; i++) {
        aux = vet[i];
        vet[i] = vet[fim];
        vet[fim] = aux;
        fim--;
    }
}

int main() {
    char palavra[25] = "Danilo Araujo"; 
    inverter(palavra); 
    printf("%s\n", palavra); 
    return 0;

