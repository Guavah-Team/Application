
# GuavahApp

A mobile application being developed of iOS and Android devices.

  

## About

Guavah is a new food review app that aims to gamify the user experience and encourage repeated user feedback. Users pick which restaurants they would like to return to in head to head showdowns in order to increase or decrease each restaurant's placement in the standings

  

## Developer Notes

It is recommended that you use Visual Studios Code as your IDE, but you may also use an IDE like WebStorm if you would like. Installation instructions assume you are using Visual Studios Code as your IDE.

<br>

### Installation/ Setup

1. Create a directory and open it in your IDE.

2. Open the IDE terminal and type the following commands into it:<br>

```

git config --global user.name <github  userID>

git clone <URL>

```

3. Install Expo in the correct folder.

```

cd GuavahApp

cd guavah

npm install expo

```

4. Test to ensure the repository was cloned successfully and that Expo was installed correctly by running the below command in the same directory.

```

expo start

```

5. Install Amplify SDK through CLI

```

TODO: Add command

```

6. Install GitKraken and link it to the downloaded repository. This is done by clicking "Open a repo" within GitKraken Client window (accessed after creating an account).

```

https://www.gitkraken.com/download

```
7. Add the remote version of the repository by clicking "+" button while hovering over the "Remote" option in the side menu (Then copy the GitHub link from the Application Repository on the Organization).
8. You are good to start coding now!<br>
### Using GitKraken/ GitHub Structure
Throughout the course of this project we will be working on multiple features at the same time-- some of which may have conflicts or dependencies. To limit the confusion and damage commonly caused by overwrites, we will be using a standard branching system during development. The process is as follows.

1. BEFORE you write a single line of code, pull from the main branch. This will get you all the completed changes that are *mostly* bug free. You should be doing this every time you open your IDE.
```
git pull origin main
```
2. If you are working on a new page alone, create a new branch (with the below syntax) from this newly pulled in code. If the branch did not switch automatically then checkout the newly created branch by typing the checkout commang. Skip step three if you are working on this page independently from everyone else.
```
git branch "page-NAME"
git checkout ""
```
3. If you are working on a page/ feature with more than one person (I.E. Someone is doing the Nav Bar and someone is doing the Search Bar on the same page) create a sub branch of the page.
```
git checkout  "page-NAME" 
git branch "feature-NAME"
git checkout  "feature-NAME" 
```
3.1 If you want to save incomplete changes you will need to push your changes to your branch. If you are working on a new branch (that has yet to be published) type the following command.
```
git push --set-upstream origin your-BRANCH
```
4. Once you are done with your feature/ page you need to begin the process of merging it to main. DO NOT DIRECTLY MERGE TO MAIN (I will find you and punish you specifically if you do this). First checkout the parent branch that you want your changes to be merged to (I.E. If you were working on a Search Bar for the search page you would select page-SEARCH). 
```
git checkout "parantBranch"
git merge "childBranch"
```
5. Repeat the above process until you get to main. NOTE:  You should only push a child up when it 100% completed. Do not push a half completed feature or page up to main for the sake of it.
6. These changes will now be reflected visually on GitKraken allowing you to see what progress has been made to what features much easier.
