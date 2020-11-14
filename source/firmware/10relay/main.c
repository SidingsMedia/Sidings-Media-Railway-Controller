/*Copyright (c) 2020 Sidings Media, All rights reserved
 *You may use, distribute and modify this code under the
 *terms of the MIT license which can be found in the 
 *project root.
 *
 *You should have received a copy of the MIT license with
 *this file. If not, please write to: 
 *support@sidingsmedia.com, or visit : 
 *https://raw.githubusercontent.com/SidingsMedia/Sidings-Media-Railway-Controller/master/LICENSE
 *
 *Name: main.c
 *Project: SMRC - firmware - 10relay
 */ 

#define F_CPU 16000000UL //Set clock speed to 16MHz
#define UBRR 103//(F_CPU/(16*9600))-1 //Calculate baud rate
//Include necessary header files
#include <avr/io.h>
void serialOut(char ch)
{
	while ((UCSR0A & (1<<UDRE0))==0);
	UDR0 = ch;
}
char serialIn()
{
	while ( !(UCSR0A & (1 << RXC0)));
	
	return UDR0;
}
int main(void)
{
    DDRD |= 0xFE; //Set pins pd2 - pd7 to output
	DDRC |= 0x3C; //Set pins pc2 - pc5 to output
	UBRR0 = UBRR; //Set baud rate
	UCSR0B |= (1 << RXEN0); //Turn on receiver
	UCSR0B|= (1<< TXEN0); //Turn on transmitter
	UCSR0C |= (3 << UCSZ00); //Set async operation, no parity, one stop bit, 8 data bits
	int channels[10] = {PORTD2, PORTD3, PORTD4, PORTD5, PORTD6, PORTD7, PORTC5, PORTC4, PORTC3, PORTC2};
    while (1) 
		
    {
		int input = serialIn() -'0';
		//int inputInt = input - '0';
		switch(input){
			case 0 ... 5://Channel 0 off
				PORTD ^= (1 << channels[input]);
				break;
			case 6 ... 9:
				PORTC ^= (1 << channels[input]);
				break;
			default:break;
		}
    }
}

