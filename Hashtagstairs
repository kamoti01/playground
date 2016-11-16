/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sumpackage;

/**
 *
 * @author timmahk
 */
public class Hashtagstairs {
    static int hashtagcount = 0;
    static int spacecount = 0;
    public static void staircase(int stairs){
        String printout = "";
        spacecount = stairs;
        if (stairs == 0){
            printout = "";
        }
        if (stairs >=1 ){
            hashtagcount += 1;
            spacecount -= 1;
                for (int res = 1; res <= spacecount; res++){
                    System.out.print("\u00A0");
                }
                for (int cnt = 1; cnt <= hashtagcount; cnt++){
                    System.out.print("#");
                }
                System.out.print("\u00A0");
                for (int count = 1; count <= hashtagcount; count++){
                    System.out.print("#");
                }
                for (int count = 1; count <= spacecount; count++){
                    System.out.print("\u00A0");
                }
                System.out.print("\n");
                staircase(stairs - 1);
        }
    }
    public static void main(String[] args){
        staircase(10);
    }
}
