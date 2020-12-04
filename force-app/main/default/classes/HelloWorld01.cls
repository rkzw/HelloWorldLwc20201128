public with sharing class HelloWorld01 {
@AuraEnabled(cacheable=true)
    public static String sayHello() {
        System.debug('Working');
        return 'Hello world from controller';
    }
}