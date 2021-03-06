USE [master]
GO
/****** Object:  Database [SanTechDB]    Script Date: 11/21/2017 4:37:23 PM ******/
CREATE DATABASE [SanTechDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'SanTechDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\SanTechDB.mdf' , SIZE = 3072KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'SanTechDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\SanTechDB_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [SanTechDB] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SanTechDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SanTechDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SanTechDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SanTechDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SanTechDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SanTechDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [SanTechDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SanTechDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SanTechDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SanTechDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SanTechDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SanTechDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SanTechDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SanTechDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SanTechDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SanTechDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [SanTechDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SanTechDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SanTechDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SanTechDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SanTechDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SanTechDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SanTechDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SanTechDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [SanTechDB] SET  MULTI_USER 
GO
ALTER DATABASE [SanTechDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SanTechDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SanTechDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SanTechDB] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [SanTechDB] SET DELAYED_DURABILITY = DISABLED 
GO
USE [SanTechDB]
GO
/****** Object:  Table [dbo].[destination]    Script Date: 11/21/2017 4:37:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[destination](
	[destination_id] [int] IDENTITY(1,1) NOT NULL,
	[destination_name] [varchar](60) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[destination_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Flights_DB]    Script Date: 11/21/2017 4:37:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Flights_DB](
	[flight_id] [int] IDENTITY(1,1) NOT NULL,
	[flight_name] [varchar](60) NOT NULL,
	[flight_depature_time] [varchar](30) NOT NULL,
	[flight_arrival_time] [varchar](30) NOT NULL,
	[flight_price] [varchar](30) NOT NULL,
	[flight_from] [varchar](30) NOT NULL,
	[flight_to] [varchar](30) NOT NULL,
	[destination_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[flight_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Flights_list]    Script Date: 11/21/2017 4:37:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Flights_list](
	[flight_id] [int] IDENTITY(1,1) NOT NULL,
	[flight_name] [varchar](60) NOT NULL,
	[flight_depature_time] [varchar](30) NOT NULL,
	[flight_arrival_time] [varchar](30) NOT NULL,
	[flight_price] [varchar](30) NOT NULL,
	[destination_id_1st] [int] NULL,
	[destination_id_2nd] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[flight_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[user_table]    Script Date: 11/21/2017 4:37:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[user_table](
	[user_id] [int] IDENTITY(1,1) NOT NULL,
	[user_name] [varchar](50) NOT NULL,
	[user_email] [varchar](50) NOT NULL,
	[user_password] [varchar](10) NOT NULL,
	[isactive] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[user_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
SET IDENTITY_INSERT [dbo].[destination] ON 

INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (1, N'Chennai-Delhi')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (2, N'Chennai-Mumbai')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (3, N'Chennai-Kolkata')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (4, N'Delhi-Chennai')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (5, N'Delhi-Mumbai')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (6, N'Delhi-Kolkata')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (7, N'Kolkata-Chennai')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (8, N'Kolkata-Delhi')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (9, N'Kolkata-Mumbai')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (10, N'Mumbai-Chennai')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (11, N'Mumbai-Delhi')
INSERT [dbo].[destination] ([destination_id], [destination_name]) VALUES (12, N'Mumbai-kolkata')
SET IDENTITY_INSERT [dbo].[destination] OFF
SET IDENTITY_INSERT [dbo].[Flights_DB] ON 

INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (1, N'IndiGo', N'01:00', N'03:30', N'3,500', N'CHENNAI', N'DELHI', 1)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (2, N'SpiceJet', N'04:00', N'06:00', N'3,800', N'CHENNAI', N'DELHI', 1)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (3, N'Jet Airways', N'07:00', N'09:00', N'4,000', N'CHENNAI', N'DELHI', 1)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (4, N'Air India', N'10:00', N'13:00', N'3,500', N'CHENNAI', N'DELHI', 1)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (5, N'GoAir', N'13:00', N'15:30', N'4,100', N'CHENNAI', N'DELHI', 1)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (6, N'Vistara Airlines', N'16:00', N'18:10', N'4,000', N'CHENNAI', N'DELHI', 1)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (7, N'JetKonnect', N'19:00', N'21:00', N'5,000', N'CHENNAI', N'DELHI', 1)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (8, N'Air Costa', N'22:00', N'23:55', N'5,500', N'CHENNAI', N'DELHI', 1)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (9, N'Air Costa', N'01:00', N'02:30', N'2,500', N'CHENNAI', N'MUMBAI', 2)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (10, N'JetKonnect', N'04:00', N'05:00', N'2,800', N'CHENNAI', N'MUMBAI', 2)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (11, N'Vistara Airlines', N'07:00', N'08:00', N'3,000', N'CHENNAI', N'MUMBAI', 2)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (12, N'GoAir', N'10:00', N'12:00', N'2,500', N'CHENNAI', N'MUMBAI', 2)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (13, N'Air India', N'13:00', N'14:30', N'4,100', N'CHENNAI', N'MUMBAI', 2)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (14, N'Jet Airways', N'16:00', N'17:10', N'3,000', N'CHENNAI', N'MUMBAI', 2)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (15, N'SpiceJet', N'19:00', N'20:00', N'4,000', N'CHENNAI', N'MUMBAI', 2)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (16, N'IndiGo', N'22:00', N'22:55', N'4,500', N'CHENNAI', N'MUMBAI', 2)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (17, N'Air India', N'01:00', N'02:40', N'2,500', N'CHENNAI', N'KOLKATA', 3)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (18, N'GoAir', N'04:00', N'05:10', N'2,800', N'CHENNAI', N'KOLKATA', 3)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (19, N'Vistara Airlines', N'07:00', N'08:10', N'3,000', N'CHENNAI', N'KOLKATA', 3)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (20, N'JetKonnect', N'10:00', N'12:10', N'2,500', N'CHENNAI', N'KOLKATA', 3)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (21, N'Air Costa', N'13:00', N'14:40', N'4,100', N'CHENNAI', N'KOLKATA', 3)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (22, N'IndiGo', N'16:00', N'17:20', N'3,000', N'CHENNAI', N'KOLKATA', 3)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (23, N'SpiceJet', N'19:00', N'20:10', N'4,000', N'CHENNAI', N'KOLKATA', 3)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (24, N'Jet Airways', N'22:00', N'23:10', N'4,500', N'CHENNAI', N'KOLKATA', 3)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (25, N'IndiGo', N'01:00', N'03:30', N'3,500', N'DELHI', N'CHENNAI', 4)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (26, N'SpiceJet', N'04:00', N'06:00', N'3,800', N'DELHI', N'CHENNAI', 4)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (27, N'Jet Airways', N'07:00', N'09:00', N'4,000', N'DELHI', N'CHENNAI', 4)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (28, N'Air India', N'10:00', N'13:00', N'3,500', N'DELHI', N'CHENNAI', 4)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (29, N'GoAir', N'13:00', N'15:30', N'4,100', N'DELHI', N'CHENNAI', 4)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (30, N'Vistara Airlines', N'16:00', N'18:10', N'4,000', N'DELHI', N'CHENNAI', 4)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (31, N'JetKonnect', N'19:00', N'21:00', N'5,000', N'DELHI', N'CHENNAI', 4)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (32, N'Air Costa', N'22:00', N'23:55', N'5,500', N'DELHI', N'CHENNAI', 4)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (33, N'SpiceJet', N'01:00', N'02:40', N'2,500', N'DELHI', N'MUMBAI', 5)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (34, N'Jet Airways', N'04:00', N'05:10', N'2,800', N'DELHI', N'MUMBAI', 5)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (35, N'Air India', N'07:00', N'08:10', N'3,000', N'DELHI', N'MUMBAI', 5)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (36, N'GoAir', N'10:00', N'12:10', N'2,500', N'DELHI', N'MUMBAI', 5)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (37, N'Vistara Airlines', N'13:00', N'14:40', N'4,100', N'DELHI', N'MUMBAI', 5)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (38, N'JetKonnect', N'16:00', N'17:20', N'3,000', N'DELHI', N'MUMBAI', 5)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (39, N'Air Costa', N'19:00', N'20:10', N'4,000', N'DELHI', N'MUMBAI', 5)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (40, N'IndiGo', N'22:00', N'23:50', N'4,500', N'DELHI', N'MUMBAI', 5)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (41, N'Jet Airways', N'01:00', N'02:40', N'2,300', N'DELHI', N'KOLKATA', 6)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (42, N'SpiceJet', N'04:00', N'05:10', N'2,500', N'DELHI', N'KOLKATA', 6)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (43, N'IndiGo', N'07:00', N'08:10', N'3,000', N'DELHI', N'KOLKATA', 6)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (44, N'Air Costa', N'10:00', N'12:10', N'2,200', N'DELHI', N'KOLKATA', 6)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (45, N'JetKonnect', N'13:00', N'14:40', N'4,000', N'DELHI', N'KOLKATA', 6)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (46, N'Vistara Airlines', N'16:00', N'17:20', N'3,000', N'DELHI', N'KOLKATA', 6)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (47, N'GoAir', N'19:00', N'20:10', N'4,000', N'DELHI', N'KOLKATA', 6)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (48, N'Air India', N'22:00', N'23:10', N'4,300', N'DELHI', N'KOLKATA', 6)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (49, N'Air India', N'01:00', N'02:40', N'2,500', N'KOLKATA', N'CHENNAI', 7)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (50, N'GoAir', N'04:00', N'05:10', N'2,800', N'KOLKATA', N'CHENNAI', 7)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (51, N'Vistara Airlines', N'07:00', N'08:10', N'3,000', N'KOLKATA', N'CHENNAI', 7)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (52, N'JetKonnect', N'10:00', N'12:10', N'2,500', N'KOLKATA', N'CHENNAI', 7)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (53, N'Air Costa', N'13:00', N'14:40', N'4,100', N'KOLKATA', N'CHENNAI', 7)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (54, N'IndiGo', N'16:00', N'17:20', N'3,000', N'KOLKATA', N'CHENNAI', 7)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (55, N'SpiceJet', N'19:00', N'20:10', N'4,000', N'KOLKATA', N'CHENNAI', 7)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (56, N'Jet Airways', N'22:00', N'23:10', N'4,500', N'KOLKATA', N'CHENNAI', 7)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (57, N'Jet Airways', N'01:00', N'02:40', N'2,300', N'KOLKATA', N'DELHI', 8)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (58, N'SpiceJet', N'04:00', N'05:10', N'2,500', N'KOLKATA', N'DELHI', 8)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (59, N'IndiGo', N'07:00', N'08:10', N'3,000', N'KOLKATA', N'DELHI', 8)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (60, N'Air Costa', N'10:00', N'12:10', N'2,200', N'KOLKATA', N'DELHI', 8)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (61, N'JetKonnect', N'13:00', N'14:40', N'4,000', N'KOLKATA', N'DELHI', 8)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (62, N'Vistara Airlines', N'16:00', N'17:20', N'3,000', N'KOLKATA', N'DELHI', 8)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (63, N'GoAir', N'19:00', N'20:10', N'4,000', N'KOLKATA', N'DELHI', 8)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (64, N'Air India', N'22:00', N'23:10', N'4,300', N'KOLKATA', N'DELHI', 8)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (65, N'IndiGo', N'01:00', N'03:40', N'3,500', N'KOLKATA', N'MUMBAI', 9)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (66, N'Air Costa', N'04:00', N'06:10', N'3,800', N'KOLKATA', N'MUMBAI', 9)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (67, N'SpiceJet', N'07:00', N'09:10', N'4,000', N'KOLKATA', N'MUMBAI', 9)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (68, N'JetKonnect', N'10:00', N'13:10', N'3,500', N'KOLKATA', N'MUMBAI', 9)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (69, N'Jet Airways', N'13:00', N'15:40', N'5,100', N'KOLKATA', N'MUMBAI', 9)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (70, N'Vistara Airlines', N'16:00', N'18:20', N'4,000', N'KOLKATA', N'MUMBAI', 9)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (71, N'Air India', N'19:00', N'21:10', N'5,000', N'KOLKATA', N'MUMBAI', 9)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (72, N'GoAir', N'22:00', N'24:10', N'5,500', N'KOLKATA', N'MUMBAI', 9)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (73, N'Air Costa', N'01:00', N'02:30', N'2,500', N'MUMBAI', N'CHENNAI', 10)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (74, N'JetKonnect', N'04:00', N'05:00', N'2,800', N'MUMBAI', N'CHENNAI', 10)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (75, N'Vistara Airlines', N'07:00', N'08:00', N'3,000', N'MUMBAI', N'CHENNAI', 10)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (76, N'GoAir', N'10:00', N'12:00', N'2,500', N'MUMBAI', N'CHENNAI', 10)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (77, N'Air India', N'13:00', N'14:30', N'4,100', N'MUMBAI', N'CHENNAI', 10)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (78, N'Jet Airways', N'16:00', N'17:10', N'3,000', N'MUMBAI', N'CHENNAI', 10)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (79, N'SpiceJet', N'19:00', N'20:00', N'4,000', N'MUMBAI', N'CHENNAI', 10)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (80, N'IndiGo', N'22:00', N'22:55', N'4,500', N'MUMBAI', N'CHENNAI', 10)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (81, N'SpiceJet', N'01:00', N'02:40', N'2,500', N'MUMBAI', N'DELHI', 11)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (82, N'Jet Airways', N'04:00', N'05:10', N'2,800', N'MUMBAI', N'DELHI', 11)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (83, N'Air India', N'07:00', N'08:10', N'3,000', N'MUMBAI', N'DELHI', 11)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (84, N'GoAir', N'10:00', N'12:10', N'2,500', N'MUMBAI', N'DELHI', 11)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (85, N'Vistara Airlines', N'13:00', N'14:40', N'4,100', N'MUMBAI', N'DELHI', 11)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (86, N'JetKonnect', N'16:00', N'17:20', N'3,000', N'MUMBAI', N'DELHI', 11)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (87, N'Air Costa', N'19:00', N'20:10', N'4,000', N'MUMBAI', N'DELHI', 11)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (88, N'IndiGo', N'22:00', N'23:50', N'4,500', N'MUMBAI', N'DELHI', 11)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (89, N'IndiGo', N'01:00', N'03:40', N'3,500', N'MUMBAI', N'KOLKATA', 12)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (90, N'Air Costa', N'04:00', N'06:10', N'3,800', N'MUMBAI', N'KOLKATA', 12)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (91, N'SpiceJet', N'07:00', N'09:10', N'4,000', N'MUMBAI', N'KOLKATA', 12)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (92, N'JetKonnect', N'10:00', N'13:10', N'3,500', N'MUMBAI', N'KOLKATA', 12)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (93, N'Jet Airways', N'13:00', N'15:40', N'5,100', N'MUMBAI', N'KOLKATA', 12)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (94, N'Vistara Airlines', N'16:00', N'18:20', N'4,000', N'MUMBAI', N'KOLKATA', 12)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (95, N'Air India', N'19:00', N'21:10', N'5,000', N'MUMBAI', N'KOLKATA', 12)
INSERT [dbo].[Flights_DB] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [flight_from], [flight_to], [destination_id]) VALUES (96, N'GoAir', N'22:00', N'24:10', N'5,500', N'MUMBAI', N'KOLKATA', 12)
SET IDENTITY_INSERT [dbo].[Flights_DB] OFF
SET IDENTITY_INSERT [dbo].[Flights_list] ON 

INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (1, N'IndiGo', N'01:00', N'03:30', N'3,500', 1, 4)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (2, N'SpiceJet', N'04:00', N'06:00', N'3,800', 1, 4)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (3, N'Jet Airways', N'07:00', N'09:00', N'4,000', 1, 4)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (4, N'Air India', N'10:00', N'13:00', N'3,500', 1, 4)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (5, N'GoAir', N'13:00', N'15:30', N'4,100', 1, 4)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (6, N'Vistara Airlines', N'16:00', N'18:10', N'4,000', 1, 4)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (7, N'JetKonnect', N'19:00', N'21:00', N'5,000', 1, 4)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (8, N'Air Costa', N'22:00', N'23:55', N'5,500', 1, 4)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (9, N'Air Costa', N'01:00', N'02:30', N'2,500', 2, 10)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (10, N'JetKonnect', N'04:00', N'05:00', N'2,800', 2, 10)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (11, N'Vistara Airlines', N'07:00', N'08:00', N'3,000', 2, 10)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (12, N'GoAir', N'10:00', N'12:00', N'2,500', 2, 10)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (13, N'Air India', N'13:00', N'14:30', N'4,100', 2, 10)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (14, N'Jet Airways', N'16:00', N'17:10', N'3,000', 2, 10)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (15, N'SpiceJet', N'19:00', N'20:00', N'4,000', 2, 10)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (16, N'IndiGo', N'22:00', N'22:55', N'4,500', 2, 10)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (17, N'Air India', N'01:00', N'02:40', N'2,500', 3, 7)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (18, N'GoAir', N'04:00', N'05:10', N'2,800', 3, 7)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (19, N'Vistara Airlines', N'07:00', N'08:10', N'3,000', 3, 7)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (20, N'JetKonnect', N'10:00', N'12:10', N'2,500', 3, 7)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (21, N'Air Costa', N'13:00', N'14:40', N'4,100', 3, 7)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (22, N'IndiGo', N'16:00', N'17:20', N'3,000', 3, 7)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (23, N'SpiceJet', N'19:00', N'20:10', N'4,000', 3, 7)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (24, N'Jet Airways', N'22:00', N'23:10', N'4,500', 3, 7)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (25, N'SpiceJet', N'01:00', N'02:40', N'2,500', 5, 11)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (26, N'Jet Airways', N'04:00', N'05:10', N'2,800', 5, 11)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (27, N'Air India', N'07:00', N'08:10', N'3,000', 5, 11)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (28, N'GoAir', N'10:00', N'12:10', N'2,500', 5, 11)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (29, N'Vistara Airlines', N'13:00', N'14:40', N'4,100', 5, 11)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (30, N'JetKonnect', N'16:00', N'17:20', N'3,000', 5, 11)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (31, N'Air Costa', N'19:00', N'20:10', N'4,000', 5, 11)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (32, N'IndiGo', N'22:00', N'23:50', N'4,500', 5, 11)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (33, N'Jet Airways', N'01:00', N'02:40', N'2,300', 6, 8)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (34, N'SpiceJet', N'04:00', N'05:10', N'2,500', 6, 8)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (35, N'IndiGo', N'07:00', N'08:10', N'3,000', 6, 8)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (36, N'Air Costa', N'10:00', N'12:10', N'2,200', 6, 8)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (37, N'JetKonnect', N'13:00', N'14:40', N'4,000', 6, 8)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (38, N'Vistara Airlines', N'16:00', N'17:20', N'3,000', 6, 8)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (39, N'GoAir', N'19:00', N'20:10', N'4,000', 6, 8)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (40, N'Air India', N'22:00', N'23:10', N'4,300', 6, 8)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (41, N'IndiGo', N'01:00', N'03:40', N'3,500', 9, 12)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (42, N'Air Costa', N'04:00', N'06:10', N'3,800', 9, 12)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (43, N'SpiceJet', N'07:00', N'09:10', N'4,000', 9, 12)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (44, N'JetKonnect', N'10:00', N'13:10', N'3,500', 9, 12)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (45, N'Jet Airways', N'13:00', N'15:40', N'5,100', 9, 12)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (46, N'Vistara Airlines', N'16:00', N'18:20', N'4,000', 9, 12)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (47, N'Air India', N'19:00', N'21:10', N'5,000', 9, 12)
INSERT [dbo].[Flights_list] ([flight_id], [flight_name], [flight_depature_time], [flight_arrival_time], [flight_price], [destination_id_1st], [destination_id_2nd]) VALUES (48, N'GoAir', N'22:00', N'24:10', N'5,500', 9, 12)
SET IDENTITY_INSERT [dbo].[Flights_list] OFF
SET IDENTITY_INSERT [dbo].[user_table] ON 

INSERT [dbo].[user_table] ([user_id], [user_name], [user_email], [user_password], [isactive]) VALUES (1, N'Santosh', N'san@san.in', N'123456', 1)
INSERT [dbo].[user_table] ([user_id], [user_name], [user_email], [user_password], [isactive]) VALUES (2, N'tst', N'tst@tst.in', N'123456', 1)
SET IDENTITY_INSERT [dbo].[user_table] OFF
SET ANSI_PADDING ON

GO
/****** Object:  Index [UQ__user_tab__B0FBA2123CAE3A8E]    Script Date: 11/21/2017 4:37:23 PM ******/
ALTER TABLE [dbo].[user_table] ADD UNIQUE NONCLUSTERED 
(
	[user_email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Flights_DB]  WITH CHECK ADD FOREIGN KEY([destination_id])
REFERENCES [dbo].[destination] ([destination_id])
GO
ALTER TABLE [dbo].[Flights_list]  WITH CHECK ADD FOREIGN KEY([destination_id_1st])
REFERENCES [dbo].[destination] ([destination_id])
GO
ALTER TABLE [dbo].[Flights_list]  WITH CHECK ADD FOREIGN KEY([destination_id_2nd])
REFERENCES [dbo].[destination] ([destination_id])
GO
USE [master]
GO
ALTER DATABASE [SanTechDB] SET  READ_WRITE 
GO
