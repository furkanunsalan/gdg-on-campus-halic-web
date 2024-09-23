import { TeamMember } from '@/lib/types';
import furkanunsalan from '@/images/team/furkanunsalan.png'; // Replace with actual paths
import eliforsun from '@/images/team/eliforsun.jpeg';
import gamzesefer from '@/images/team/gamzesefer.jpg';
import gizemorhan from '@/images/team/gizemorhan.jpg';
import mertparlak from '@/images/team/mertparlak.png';
import mustafaeftekin from '@/images/team/mustafaeftekin.jpeg';
import osmangurel from '@/images/team/osmangurel.jpg';
import pelinuyanik from '@/images/team/pelinuyanik.jpeg';
import serhanergul from '@/images/team/serhanergul.jpg';
import tahagulbaz from '@/images/team/tahagulbaz.jpg';
import tahayildirim from '@/images/team/tahayildirim.jpg';

export const teamMembers: TeamMember[] = [
    {
        avatar: serhanergul, // Added avatar
        name: "Serhan",
        surname: 'Ergül',
        title: 'Organiser',
        variant: 'red'
    },
    {
        avatar: furkanunsalan,
        name: 'Furkan',
        surname: 'Ünsalan',
        title: 'Vice President',
        variant: 'red',
        linkedinUrl: 'https://www.linkedin.com/in/furkanunsalan/',
        instagramUsername: "furkanunsalan"
    },
    {
        avatar: mertparlak,
        name: 'Mert',
        surname: 'Parlak',
        title: 'Secretary-General',
        variant: 'red'
    },
    // Organization Team (Green Variant)
    {
        avatar: tahayildirim,
        name: "Taha",
        surname: "Yıldırım",
        title: "Organization Team Lead",
        variant: "green",
    },
    {
        avatar: gamzesefer,
        name: "Gamze",
        surname: "Sefer",
        title: "Organization Team",
        variant: "green",
    },
    {
        avatar: gizemorhan,
        name: "Gizem Selin",
        surname: "Orhan",
        title: "Organization Team",
        variant: "green",
    },
    {
        avatar: pelinuyanik,
        name: "Pelin",
        surname: "Uyanık",
        title: "Organization Team",
        variant: "green",
    },
    {
        name: "Yahya",
        surname: "Sebti",
        title: "Organization Team",
        variant: "green",
    },
    {
        name: "Ömer",
        surname: "Faruk",
        title: "Organization Team",
        variant: "green",
    },
    {
        avatar: eliforsun,
        name: "Elif Nas",
        surname: "Örsün",
        title: "Organization Team",
        variant: "green",
    },
    {
        name: "Devran",
        surname: "Duman",
        title: "Organization Team",
        variant: "green",
    },
    {
        name: "Elif Özge",
        surname: "Bektaş",
        title: "Organization Team",
        variant: "green",
    },
  
    // Project Team (Blue Variant)
    {
        avatar: mustafaeftekin,
        name: "Mustafa",
        surname: "Eftekin",
        title: "Project Team Lead",
        variant: "blue",
    },
    {
        avatar: osmangurel,
        name: "Osman Şener",
        surname: "Gürel",
        title: "Project Team",
        variant: "blue",
    },
    {
        avatar: tahagulbaz,
        name: "Taha",
        surname: "Gülbaz",
        title: "Project Team",
        variant: "blue",
    },
  
    // Social Media and Design Team (Yellow Variant)
    {
        name: "Irmak",
        surname: "Çelik",
        title: "Social Media Manager",
        variant: "yellow",
    },
    {
        name: "Melike",
        surname: "Tekirdağ",
        title: "Social Media and Design Team",
        variant: "yellow",
    },
    {
        name: "Burcu",
        surname: "Aydın",
        title: "Social Media and Design Team",
        variant: "yellow",
    },
];
