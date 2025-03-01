import { AppShell, Button, Group, Text } from "@mantine/core";
import { IconDashboard, IconHome, IconShoppingCart } from "@tabler/icons-react";
import { Link } from "wouter";

const Navbar = () => {
	return (
		<div>
			<p>whats wrong here</p>
			<AppShell>
				<AppShell.Header h={60}>
					<Group h="100%" px="md" justify="space-between">
						<Link href="/">
							<Button variant="subtle">
								<Text size="lg" fw={700}>
									My Shop
								</Text>
							</Button>
						</Link>

						<Group>
							<Link href="/">
								<Button variant="subtle" leftSection={<IconHome size={20} />}>
									Home
								</Button>
							</Link>
							<Link href="/contact-us">
								<Button
									variant="subtle"
									leftSection={<IconShoppingCart size={20} />}
								>
									Contact Us
								</Button>
							</Link>
							<Link href="/dashboard">
								<Button
									variant="subtle"
									leftSection={<IconDashboard size={20} />}
								>
									Dashboard
								</Button>
							</Link>
						</Group>
					</Group>
				</AppShell.Header>
			</AppShell>
		</div>
	);
};

export default Navbar;
